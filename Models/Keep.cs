using System.ComponentModel.DataAnnotations;

namespace keepr.Models
{
    public class Keep
    {
        public int Id { get; set; }
        public string CreatorId { get; set; }

        [Required(ErrorMessage = "Please provide a name")]
        public string Name { get; set; }
        
        [Required(ErrorMessage = "Please provide a description")]
        public string Description { get; set; }
        
        [Required(ErrorMessage = "Please provide an image")]
        public string Img { get; set; }
        public int Views { get; set; }
        public int Shares { get; set; }
        public int Keeps { get; set; }
        public Profile Creator { get; set; }
    }
    public class VaultKeepViewModel : Keep
    {
        public int VaultKeepId { get; set; }
    }
}