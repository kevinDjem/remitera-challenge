using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Remitera.Api.Data;
using Remitera.Api.Models;

namespace Remitera.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RemitosController : ControllerBase
{
    private readonly AppDbContext _context;

    public RemitosController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Remito>>> Get()
    {
        return await _context.Remitos.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Remito>> Post(Remito remito)
    {
        _context.Remitos.Add(remito);

        await _context.SaveChangesAsync();

        return Ok(remito);
    }
}