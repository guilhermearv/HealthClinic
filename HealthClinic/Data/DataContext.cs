using HealthClinic.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace HealthClinic.Data
{
    public class DataContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public DataContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(Configuration.GetConnectionString("stringDatabase"));
        }
        public DbSet<Patients> Patients { get; set; }
        public DbSet<HealthInsurances> HealthInsurances { get; set; }
    }
}
