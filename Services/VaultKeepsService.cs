using System;
using System.Collections.Generic;
using keepr.Models;
using keepr.Repositories;

namespace keepr.Services
{
    public class VaultKeepsService
    {
        private readonly VaultKeepsRepository _vaultKeepsRepository;

        public VaultKeepsService(VaultKeepsRepository vaultKeepsRepository)
        {
            _vaultKeepsRepository = vaultKeepsRepository;
        }

        public IEnumerable<VaultKeep> Get()
        {
            return _vaultKeepsRepository.Get();
        }

        public VaultKeep GetOne(int id, Profile userInfo)
        {
            return _vaultKeepsRepository.GetOne(id, userInfo);
        }

        public IEnumerable<VaultKeep> GetVaultKeepsByProfile(Profile userInfo)
        {
            return _vaultKeepsRepository.GetVaultKeepsByProfile(userInfo);
        }

        public IEnumerable<Keep> GetKeepsByVaultId(int vaultId)
        {
            return _vaultKeepsRepository.GetKeepsByVaultId(vaultId);
        }

        public VaultKeep Create(VaultKeep newVaultKeep)
        {
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