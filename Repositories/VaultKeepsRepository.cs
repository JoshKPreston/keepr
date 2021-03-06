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

        public IEnumerable<VaultKeep> GetVaultKeepsByProfileId(string id)
        {
            string sql = @"select * from vaultkeeps where creatorId = @id";
            return _db.Query<VaultKeep>(sql, new { id });
        }

        // public IEnumerable<Keep> GetKeepsByVaultId(int id)
        // {
        //     string sql = @"
        //         select vk.id as VaultKeepId, k.*, v.*, p.*
        //         from vaultkeeps vk
        //         join keeps k on k.id = vk.keepId
        //         join vaults v on v.id = vk.vaultId
        //         join profiles p on p.id = k.creatorId
        //         where vk.vaultId = @id";
        //     return _db.Query<VaultKeepViewModel, Profile, VaultKeepViewModel>(sql, (keep, profile) => { 
        //         keep.Creator = profile; 
        //         return keep; 
        //     }, new { id }, splitOn: "id");
        // }

        public IEnumerable<Keep> GetKeepsByVaultId(int id)
        {
            string sql = @"
                select vk.id as VaultKeepId, k.*, p.*
                from vaultkeeps vk
                join keeps k on k.id = vk.keepId
                join profiles p on p.id = k.creatorId
                where vk.vaultId = @id";
            return _db.Query<VaultKeepViewModel, Profile, VaultKeepViewModel>(sql, (keep, profile) => { 
                keep.Creator = profile; 
                return keep; 
            }, new { id }, splitOn: "id");
        }


        public int Create(VaultKeep newVaultKeep)
        {
            string sql = @"
                insert into vaultkeeps
                (creatorId, vaultId, keepId)
                values
                (@creatorId, @vaultId, @keepId);
                select last_insert_id();";
            int lastInsertId = _db.ExecuteScalar<int>(sql, newVaultKeep);

            int keepId = newVaultKeep.KeepId;
            sql = @"
            update keeps k 
            set k.keeps = k.keeps + 1 
            where id = @keepId"; 
            _db.Execute(sql, new { keepId });

            return lastInsertId;
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
            string sql = @"
                select * from vaultkeeps where id = @id";
            VaultKeep vaultKeep = _db.QueryFirstOrDefault<VaultKeep>(sql, new { id });

            int keepId = vaultKeep.KeepId;
            sql = @"
                update keeps k 
                set k.keeps = k.keeps - 1 
                where id = @keepId"; 
            _db.Execute(sql, new { keepId });

            sql = "delete from vaultkeeps where id = @id";
            _db.Execute(sql, new { id });
            
        }
    }
}