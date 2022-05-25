using System.ComponentModel.DataAnnotations;

namespace HealthClinic.Models
{
    public class HealthInsurances
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatorio")]
        [MaxLength(80, ErrorMessage = "Este campo deve conter até 80 caracteres")]
        public string Name { get; set; }
    }
}
