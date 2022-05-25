using Microsoft.AspNetCore.Mvc;
using System;
using System.ComponentModel.DataAnnotations;

namespace HealthClinic.Models
{
    public class Patients
    {
        [Key]
        [Required(ErrorMessage = "Este campo é obrigatorio")]
        [RegularExpression(@"^\d{11}$", ErrorMessage = "Valor incorreto")]
        public long CPF { get; set; }
        public string MedicalRecord { get; set; }

        [MaxLength(80, ErrorMessage = "Este campo deve conter até 80 caracteres")]
        public string Name { get; set; }

        [MaxLength(80, ErrorMessage = "Este campo deve conter até 80 caracteres")]
        public string LastName { get; set; }
        public DateTime? BirthDate { get; set; }
        public string Gender { get; set; }
        public int? RG { get; set; }
        public string UF_RG { get; set; }

        [MaxLength(80, ErrorMessage = "Este campo deve conter até 80 caracteres")]
        public string Email { get; set; }
        public long? CellPhone { get; set; }
        public int? Phone { get; set; }
        public int? HealthInsurancesId { get; set; }
        public int? HealthInsuranceNumber { get; set; }
        public DateTime? HealthInsuranceDateExpirate { get; set; }


    }
}
