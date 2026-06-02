using Microsoft.AspNetCore.Mvc;
using Remitera.Api.Dtos;
using Remitera.Api.Services;

namespace Remitera.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RemitosController : ControllerBase
{
    private readonly IRemitoService _service;

    public RemitosController(IRemitoService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok(await _service.GetAllAsync());
    }

    [HttpPost]
    public async Task<IActionResult> Create(CreateRemitoRequest request)
    {
        try
        {
            var remito = await _service.CreateAsync(request);
            return Ok(remito);
        }
        catch (Exception ex)
        {
            return BadRequest(new
            {
                message = ex.Message
            });
        }
    }
}