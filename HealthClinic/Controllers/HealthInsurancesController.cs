using HealthClinic.Data;
using HealthClinic.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HealthClinic.Controllers
{
    [Route("v1/HealthInsurances")]
    [ApiController]
    public class HealthInsurancesController : ControllerBase
    {
        private readonly DataContext context;
        public HealthInsurancesController(DataContext _context)
        {
            context = _context;
        }

        // GET: api/<HealthInsurancesController>
        [HttpGet]
        [Route("")]
        public async Task<ActionResult<List<HealthInsurances>>> Get()
        {
            List<HealthInsurances> healthInsurances = await context.HealthInsurances.ToListAsync();
            return healthInsurances;
        }

        // GET api/<HealthInsurancesController>/5
        [HttpGet]
        [Route("{id:int}")]
        public async Task<ActionResult<HealthInsurances>> Get(int id)
        {
            HealthInsurances healthInsurances = await context.HealthInsurances
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.Id == id);
            return healthInsurances;
        }

        // POST api/<HealthInsurancesController>
        [HttpPost]
        [Route("")]
        public async Task<ActionResult<HealthInsurances>> Post([FromBody] HealthInsurances model)
        {
            if (ModelState.IsValid)
            {
                context.HealthInsurances.Add(model);
                await context.SaveChangesAsync();
                return model;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        // PUT api/<HealthInsurancesController>/5
        [HttpPut("{id}")]
        [Route("")]
        public async Task<ActionResult<HealthInsurances>> Put(int id, [FromBody] HealthInsurances model)
        {
            try
            {
                if (model.Id != id)
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

        // DELETE api/<HealthInsurancesController>/5
        [HttpDelete("{id}")]
        [Route("")]
        public async Task<ActionResult<HealthInsurances>> Delete(int id)
        {

            HealthInsurances healthInsurances = await context.HealthInsurances
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == id);
            if (healthInsurances == null)
            {
                return NotFound();
            }

            context.HealthInsurances.Remove(healthInsurances);
            await context.SaveChangesAsync();

            return Ok();
        }
    }
}
