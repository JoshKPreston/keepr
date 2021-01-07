using System;
using keepr.Models;
using keepr.Repositories;

namespace keepr.Services
{
    public class ProfilesService
    {
        private readonly ProfilesRepository _profilesRepository;

        public ProfilesService(ProfilesRepository profilesRepository)
        {
            _profilesRepository = profilesRepository;
        }

        public Profile GetOrCreateProfile(Profile userInfo)
        {
            Profile profile = _profilesRepository.GetByEmail(userInfo.Email);
            if (profile == null || profile.Id == null)
            {
                return _profilesRepository.Create(userInfo);
            }
            return profile;
        }

        public Profile GetCreatorProfileById(string id)
        {
            return _profilesRepository.GetCreatorProfileById(id);
        }
  }
}