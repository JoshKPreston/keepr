using System.ComponentModel.DataAnnotations;

namespace keepr.Models
{
    public class Vault
    {
        public int Id { get; set; }
        public string CreatorId { get; set; }
        
        [Required(ErrorMessage = "Please provide a name")]
        public string Name { get; set; }
        
        [Required(ErrorMessage = "Please provide a description")]
        public string Description { get; set; }
        public bool IsPrivate { get; set; }
        public Profile Creator { get; set; }
    }
}