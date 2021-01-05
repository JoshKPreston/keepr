using System;
using System.Collections.Generic;
using System.Data;
using Dapper;
using keepr.Models;

namespace keepr.Repositories
{
    public class KeepsRepository
    {
        private readonly IDbConnection _db;
        private readonly ProfilesRepository _profilesRepository;

        public KeepsRepository(IDbConnection db)
        {
            _db = db;
        }

        public IEnumerable<Keep> Get()
        {
            string sql = "select * from keeps";
            return _db.Query<Keep>(sql);
        }

        public Keep GetOne(int id)
        {
            string sql = @"
            update keeps 
            set views = views + 1 
            where id = @id"; 
            _db.Execute(sql, new { id });

            sql = "select * from keeps where id = @id";
            return _db.QueryFirstOrDefault<Keep>(sql, new { id });
        }

        internal IEnumerable<Keep> GetKeepsByProfile(Profile userInfo)
        {
            string sql = @"select * from keeps where creatorId = @creatorId";
            return _db.Query<Keep>(sql, new { creatorId = userInfo.Id });
        }

        public int Create(Keep newKeep)
        {
            string sql = "select * from profiles where id = @id";
            newKeep.Creator = _db.QueryFirstOrDefault<Profile>(sql, new { newKeep.CreatorId });
            sql = @"
                insert into keeps
                (creatorId, name, description, img, creator)
                values
                (@creatorId, @name, @description, @img, @creator);
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