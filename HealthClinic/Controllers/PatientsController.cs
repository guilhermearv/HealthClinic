using HealthClinic.Data;
using HealthClinic.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HealthClinic.Controllers
{
    [Route("v1/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        private readonly DataContext context;
        public PatientsController(DataContext _context)
        {
            context = _context;
        }

        // GET: api/<PatientsController>
        [HttpGet]
        [Route("")]
        public async Task<ActionResult<List<Patients>>> Get()
        {
            List<Patients> patients = await context.Patients.ToListAsync();
            return patients;
        }

        // GET api/<PatientsController>/5
        [HttpGet]
        [Route("{id:long}")]
        public async Task<ActionResult<Patients>> Get(long id)
        {
            Patients patients = await context.Patients
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.CPF == id);
            return patients;
        }

        // POST api/<PatientsController>
        [HttpPost]
        [Route("")]
        public async Task<ActionResult<Patients>> Post([FromBody] Patients model)
        {
            Patients patients = await context.Patients
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.CPF == model.CPF);

            if (patients != null)
                ModelState.AddModelError("CPF", "CPF já foi cadastrado");

            if (model.Phone == 0 && model.CellPhone == 0)
            {
                ModelState.AddModelError("Phone", "Preencha ao menos um telefone");
                ModelState.AddModelError("CellPhone", "Preencha ao menos um telefone");
            }

            if (ModelState.IsValid)
            {
                context.Patients.Add(model);
                await context.SaveChangesAsync();
                return model;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        // PUT api/<PatientsController>/5
        [HttpPut("{id}")]
        [Route("")]
        public async Task<ActionResult<Patients>> Put(long id, [FromBody] Patients model)
        {
            try
            {
                if (model.CPF != id)
                {
                    return BadRequest();
                }

                context.Entry(model).State = EntityState.Modified;
                await context.SaveChangesAsync();

                return model;
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao atualizar registro");
            }

        }

        // DELETE api/<PatientsController>/5
        [HttpDelete("{id}")]
        [Route("")]
        public async Task<ActionResult<Patients>> Delete(long id)
        {

            Patients patients = await context.Patients
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.CPF == id);
            if (patients == null)
            {
                return NotFound();
            }

            context.Patients.Remove(patients);
            await context.SaveChangesAsync();

            return Ok();
        }

    }
}
