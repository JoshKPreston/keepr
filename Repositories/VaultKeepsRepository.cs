using System;
using System.Collections.Generic;
using System.Data;
using Dapper;
using keepr.Models;

namespace keepr.Repositories
{
    public class VaultKeepsRepository
    {
        private readonly IDbConnection _db;

        public VaultKeepsRepository(IDbConnection db)
        {
            _db = db;
        }

        public IEnumerable<VaultKeep> Get()
        {
            string sql = "select * from vaultkeeps";
            return _db.Query<VaultKeep>(sql);
        }

        public VaultKeep GetOne(int id, Profile userInfo)
        {
            string sql = "select * from vaultkeeps where id = @id and creatorId = @creatorId";
            return _db.QueryFirstOrDefault<VaultKeep>(sql, new { id = id, creatorId = userInfo.Id });
        }

        public IEnumerable<VaultKeep> GetVaultKeepsByProfile(Profile userInfo)
        {
            string sql = @"select * from vaultkeeps where creatorId = @creatorId";
            return _db.Query<VaultKeep>(sql, new { creatorId = userInfo.Id });
        }

        public IEnumerable<Keep> GetKeepsByVaultId(int vaultId)
        {
            string sql = @"
            select * from keeps
            inner join vaultkeeps
            on vaultkeeps.vaultId = @vaultId";
            return _db.Query<Keep>(sql, new { vaultId });
        }

        public int Create(VaultKeep newVaultKeep)
        {
            string sql = @"
                insert into vaultkeeps
                (creatorId, vaultId, keepId)
                values
                (@creatorId, @vaultId, @keepId);
                select last_insert_id();";
            return _db.ExecuteScalar<int>(sql, newVaultKeep);
        }

        internal void Edit(int id, VaultKeep data)
        {
            data.Id = id;
            string sql = @"
                update vaultkeeps
                set
                vaultId = @vaultId,
                keepId = @keepId,
                where id = @id";
            _db.Execute(sql, data);
        }

        internal void Delete(int id)
        {
            string sql = "delete from vaultkeeps where id = @id";
            _db.Execute(sql, new { id });
        }
    }
}