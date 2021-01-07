using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using keepr.Models;

namespace keepr.Repositories
{
    public class KeepsRepository
    {
        private readonly IDbConnection _db;

        public KeepsRepository(IDbConnection db)
        {
            _db = db;
        }

        public IEnumerable<Keep> Get()
        {
            string sql = @"
                select k.*, p.*
                from keeps k
                join profiles p on p.id = k.creatorId";
            return _db.Query<Keep, Profile, Keep>(sql, (keep, profile) => {
                    keep.Creator = profile;
                    return keep;
                }
            );
        }

        public Keep GetOne(int id)
        {
            string sql = @"
            update keeps 
            set views = views + 1 
            where id = @id"; 
            _db.Execute(sql, new { id });

            sql = @"
            select k.*, p.*
            from keeps k
            join profiles p on p.id = k.creatorId
            where k.id = @id";
            IEnumerable<Keep> keeps = _db.Query<Keep, Profile, Keep>(
                sql,
                (keep, profile) => {
                    keep.Creator = profile;
                    return keep;
                },
                new { id }
            );
            Keep keep = keeps.FirstOrDefault<Keep>();
            return keep;
        }

        public IEnumerable<Keep> GetKeepsByProfileId(string id)
        {
            string sql = @"
            select k.*, p.*
            from keeps k
            join profiles p on p.id = k.creatorId
            where k.creatorId = @id";
            // return _db.Query<Keep>(sql, new { id });
            return _db.Query<Keep, Profile, Keep>(sql, (keep, profile) => { 
                keep.Creator = profile; 
                return keep; 
            }, new { id });
        }

        public int Create(Keep newKeep)
        {
            string sql = @"
                insert into keeps
                (creatorId, name, description, img)
                values
                (@creatorId, @name, @description, @img);
                select last_insert_id();";
            return _db.ExecuteScalar<int>(sql, newKeep);
        }

        internal void Edit(int id, Keep data)
        {
            data.Id = id;
            string sql = @"
                update keeps
                set
                name = @name,
                description = @description,
                img = @img
                where id = @id";
            _db.Execute(sql, data);
        }

        internal void Delete(int id)
        {
            string sql = "delete from keeps where id = @id";
            _db.Execute(sql, new { id });
        }
    }
}