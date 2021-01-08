using System.Collections.Generic;
using System.Data;
using System.Linq;
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
            string sql = @"
                select v.*, p.* 
                from vaults v 
                join profiles p on p.id = v.creatorId
                where isPrivate = false";
            return _db.Query<Vault, Profile, Vault>(sql, (vault, profile) => {
                vault.Creator = profile;
                return vault;
            });
        }

        public Vault GetOne(int id)
        {
            string sql = @"
                select v.*, p.*
                from vaults v
                join profiles p on p.id = v.creatorId
                where v.id = @id";
            IEnumerable<Vault> vaults = _db.Query<Vault, Profile, Vault>(
                sql,
                (vault, profile) => {
                    vault.Creator = profile;
                    return vault;
                },
                new { id } 
            );
            Vault vault = vaults.FirstOrDefault<Vault>();
            return vault;
        }

        public IEnumerable<Vault> GetVaultsByProfileId(string id)
        {
            string sql = @"
                select v.*, p.*
                from vaults v
                join profiles p on p.id = v.creatorId
                where p.id = @id";
            return _db.Query<Vault, Profile, Vault>(sql, (vault, profile) => { 
                vault.Creator = profile; 
                return vault; 
            }, new { id });
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