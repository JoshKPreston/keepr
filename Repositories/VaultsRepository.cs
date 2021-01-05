using System.Collections.Generic;
using System.Data;
using Dapper;
using keepr.Models;

namespace keepr.Repositories
{
    public class VaultsRepository
    {
        private readonly IDbConnection _db;

        public VaultsRepository(IDbConnection db)
        {
            _db = db;
        }

        public IEnumerable<Vault> Get()
        {
            string sql = "select * from vaults where isPrivate = false";
            return _db.Query<Vault>(sql);
        }

        public Vault GetOne(int id)
        {
            string sql = "select * from vaults where id = @id";
            return _db.QueryFirstOrDefault<Vault>(sql, new { id });
        }

        internal IEnumerable<Vault> GetVaultsByProfile(Profile userInfo)
        {
            string sql = @"select * from vaults where creatorId = @creatorId";
            return _db.Query<Vault>(sql, new { creatorId = userInfo.Id });
        }

        public int Create(Vault newVault)
        {
            string sql = @"
                insert into vaults
                (creatorId, name, description, isPrivate)
                values
                (@creatorId, @name, @description, @isPrivate);
                select last_insert_id();";
            return _db.ExecuteScalar<int>(sql, newVault);
        }

        internal void Edit(int id, Vault data)
        {
            data.Id = id;
            string sql = @"
                update vaults
                set
                name = @name,
                description = @description,
                isPrivate = @isPrivate
                where id = @id";
            _db.Execute(sql, data);
        }

        internal void Delete(int id)
        {
            string sql = "delete from vaults where id = @id";
            _db.Execute(sql, new { id });
        }
    }
}