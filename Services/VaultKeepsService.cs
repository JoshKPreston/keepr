using System;
using System.Collections.Generic;
using keepr.Models;
using keepr.Repositories;

namespace keepr.Services
{
    public class VaultKeepsService
    {
        private readonly VaultKeepsRepository _vaultKeepsRepository;
        private readonly VaultsRepository _vaultsRepository;

        public VaultKeepsService(VaultKeepsRepository vaultKeepsRepository, VaultsRepository vaultsRepository)
        {
            _vaultKeepsRepository = vaultKeepsRepository;
            _vaultsRepository = vaultsRepository;
        }

        public IEnumerable<VaultKeep> Get()
        {
            return _vaultKeepsRepository.Get();
        }

        public VaultKeep GetOne(int id, Profile userInfo)
        {
            return _vaultKeepsRepository.GetOne(id, userInfo);
        }

        public IEnumerable<VaultKeep> GetVaultKeepsByProfileId(string userId)
        {
            return _vaultKeepsRepository.GetVaultKeepsByProfileId(userId);
        }

        public IEnumerable<Keep> GetKeepsByVaultId(int vaultId)
        {
            return _vaultKeepsRepository.GetKeepsByVaultId(vaultId);
        }

        public VaultKeep Create(VaultKeep newVaultKeep)
        {
            Vault vault = _vaultsRepository.GetOne(newVaultKeep.VaultId);
            if (newVaultKeep.CreatorId != vault.CreatorId)
            {
                throw new Exception("Invalid <VaultKeep> creator");
            }
            newVaultKeep.Id = _vaultKeepsRepository.Create(newVaultKeep);
            return newVaultKeep;
        }

        internal VaultKeep Edit(int id, VaultKeep data, Profile userInfo)
        {
            VaultKeep original = _vaultKeepsRepository.GetOne(id, userInfo);
            if (original == null)
            {
                throw new Exception("Cannot find <VaultKeep> with that <Id>");
            }
            if (original.CreatorId != userInfo.Id)
            {
                throw new Exception("Invalid <VaultKeep> creator");
            }
            _vaultKeepsRepository.Edit(id, data);
            return _vaultKeepsRepository.GetOne(id, userInfo);
        }

        internal Boolean Delete(int id, Profile userInfo)
        {
            VaultKeep original = _vaultKeepsRepository.GetOne(id, userInfo);
            if (original == null)
            {
            throw new Exception("Cannot find <VaultKeep> with that <Id>");
            }
            if (original.CreatorId != userInfo.Id)
            {
            throw new Exception("Invalid <VaultKeep> creator");
            }
            _vaultKeepsRepository.Delete(id);
            original = _vaultKeepsRepository.GetOne(id, userInfo);
            if (original == null)
            {
            return true;
            }
            else
            {
            throw new Exception("Failed to delete <VaultKeep>");
            }
        }
  }
}