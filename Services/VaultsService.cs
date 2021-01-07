using System;
using System.Collections.Generic;
using keepr.Models;
using keepr.Repositories;

namespace keepr.Services
{
  public class VaultsService
  {
    private readonly VaultsRepository _vaultsRepository;

    public VaultsService(VaultsRepository vaultsRepository)
    {
        _vaultsRepository = vaultsRepository;
    }

    public IEnumerable<Vault> Get()
    {
      return _vaultsRepository.Get();
    }
    public IEnumerable<Vault> GetVaultsByProfileId(string id)
    {
      return _vaultsRepository.GetVaultsByProfileId(id);
    }

    public Vault GetOne(int id)
    {
      Vault vault = _vaultsRepository.GetOne(id);
      if (vault.IsPrivate)
      {
        throw new Exception("Vault is private");
      }
      return vault;
    }

    public Vault Create(Vault newVault)
    {
      newVault.Id = _vaultsRepository.Create(newVault);
      return newVault;
    }

    internal Vault Edit(int id, Vault data, Profile userInfo)
    {
      Vault original = _vaultsRepository.GetOne(id);
      if (original == null)
      {
        throw new Exception("Cannot find <Vault> with that <Id>");
      }
      if (original.CreatorId != userInfo.Id)
      {
        throw new Exception("Invalid <Vault> creator");
      }
      _vaultsRepository.Edit(id, data);
      return _vaultsRepository.GetOne(id);
    }

    internal Boolean Delete(int id, Profile userInfo)
    {
      Vault original = _vaultsRepository.GetOne(id);
      if (original == null)
      {
        throw new Exception("Cannot find <Vault> with that <Id>");
      }
      if (original.CreatorId != userInfo.Id)
      {
        throw new Exception("Invalid <Vault> creator");
      }
      _vaultsRepository.Delete(id);
      original = _vaultsRepository.GetOne(id);
      if (original == null)
      {
        return true;
      }
      else
      {
        throw new Exception("Failed to delete <Vault>");
      }
    }
  }
}