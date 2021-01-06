using System;
using System.Collections.Generic;
using keepr.Models;
using keepr.Repositories;

namespace keepr.Services
{
  public class KeepsService
  {
    private readonly KeepsRepository _keepsRepository;

    public KeepsService(KeepsRepository keepsRepository)
    {
        _keepsRepository = keepsRepository;
    }

    public IEnumerable<Keep> Get()
    {
      return _keepsRepository.Get();
    }
    public IEnumerable<Keep> GetKeepsByProfileId(string id)
    {
      return _keepsRepository.GetKeepsByProfileId(id);
    }

    public Keep GetOne(int id)
    {
      return _keepsRepository.GetOne(id);
    }

    public Keep Create(Keep newKeep)
    {
      newKeep.Id = _keepsRepository.Create(newKeep);
      return newKeep;
    }

    internal Keep Edit(int id, Keep data, Profile userInfo)
    {
      Keep original = _keepsRepository.GetOne(id);
      if (original == null)
      {
        throw new Exception("Cannot find <Keep> with that <Id>");
      }
      if (original.CreatorId != userInfo.Id)
      {
        throw new Exception("Invalid <Keep> creator");
      }
      _keepsRepository.Edit(id, data);
      return _keepsRepository.GetOne(id);
    }

    internal Boolean Delete(int id, Profile userInfo)
    {
      Keep original = _keepsRepository.GetOne(id);
      if (original == null)
      {
        throw new Exception("Cannot find <Keep> with that <Id>");
      }
      if (original.CreatorId != userInfo.Id)
      {
        throw new Exception("Invalid <Keep> creator");
      }
      _keepsRepository.Delete(id);
      original = _keepsRepository.GetOne(id);
      if (original == null)
      {
        return true;
      }
      else
      {
        throw new Exception("Failed to delete <Keep>");
      }
    }
  }
}