using System.Threading.Tasks;
using keepr.Models;
using keepr.Services;
using Microsoft.AspNetCore.Mvc;
using CodeWorks.Auth0Provider;
using Microsoft.AspNetCore.Authorization;

namespace keepr.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfilesController : ControllerBase
    {
        private readonly ProfilesService _profilesService;
        private readonly KeepsService _keepsService;
        private readonly VaultsService _vaultsService;
        private readonly VaultKeepsService _vaultKeepsService;

        public ProfilesController(ProfilesService profilesService, KeepsService keepsService, VaultsService vaultsService, VaultKeepsService vaultKeepsService)
        {
            _profilesService = profilesService;
            _keepsService = keepsService;
            _vaultsService = vaultsService;
            _vaultKeepsService = vaultKeepsService;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<Profile>> Get()
        {
            try
            {
                Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
                return Ok(_profilesService.GetOrCreateProfile(userInfo));
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Profile> GetCreatorProfileById(string id)
        {
            try
            {
                return Ok(_profilesService.GetCreatorProfileById(id));
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}/keeps")]
        public ActionResult<Keep> GetKeepsByProfileId(string id)
        {
            try
            {
                return Ok(_keepsService.GetKeepsByProfileId(id));
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}/vaults")]
        public ActionResult<Vault> GetVaultsByProfileId(string id)
        {
            try
            {
                return Ok(_vaultsService.GetVaultsByProfileId(id));
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}/vaultkeeps")]
        [Authorize]
        public ActionResult<VaultKeep> GetVaultKeepsByProfileId(string id)
        {
            try
            {
                return Ok(_vaultKeepsService.GetVaultKeepsByProfileId(id));
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}