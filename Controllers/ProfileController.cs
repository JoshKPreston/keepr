using keepr.Services;
using Microsoft.AspNetCore.Mvc;

namespace keepr.Controllers
{
    public class ProfileController : ControllerBase
    {
        private readonly ProfileService _profileService;

        public ProfileController(ProfileService profileService)
        {
            _profileService = profileService;
        }

    }
}