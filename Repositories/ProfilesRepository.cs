using System;
using System.Data;
using Dapper;
using keepr.Models;

namespace keepr.Repositories
{
    public class ProfilesRepository
    {
        private readonly IDbConnection _db;

        public ProfilesRepository(IDbConnection db)
        {
            _db = db;
        }
        public Profile GetByEmail(string email)
        {
            string sql = "select * from profiles where email = @Email";
            return _db.QueryFirstOrDefault<Profile>(sql, new { email });
        }

        public Profile GetProfileById(string id)
        {
            string sql = "select * from profiles where id = @id";
            return _db.QueryFirstOrDefault<Profile>(sql, new { id });
        }
        
        public Profile Create(Profile userInfo)
        {
            string sql = @"
            insert into profiles
            (id, name, email, picture)
            values
            (@Id, @Name, @Email, @Picture)";
            _db.Execute(sql, userInfo);
            return userInfo;
        }
  }
}