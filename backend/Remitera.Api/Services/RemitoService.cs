using Microsoft.EntityFrameworkCore;
using Remitera.Api.Data;
using Remitera.Api.Dtos;
using Remitera.Api.Models;

namespace Remitera.Api.Services;

public class RemitoService : IRemitoService
{
    private readonly AppDbContext _context;

    public RemitoService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<RemitoResponse>> GetAllAsync()
    {
        return await _context.Remitos
            .Select(r => new RemitoResponse
            {
                Id = r.Id,
                NumeroRemito = r.NumeroRemito,
                Cliente = r.Cliente,
                Fecha = r.Fecha,
                Observaciones = r.Observaciones
            })
           .OrderByDescending(r => r.Fecha)
            .ToListAsync();
    }

    public async Task<RemitoResponse> CreateAsync(CreateRemitoRequest request)
    {
        var remito = new Remito
        {
            NumeroRemito = request.NumeroRemito,
            Cliente = request.Cliente,
            Fecha = request.Fecha,
            Observaciones = request.Observaciones
        };

        _context.Remitos.Add(remito);

        await _context.SaveChangesAsync();

        return new RemitoResponse
        {
            Id = remito.Id,
            NumeroRemito = remito.NumeroRemito,
            Cliente = remito.Cliente,
            Fecha = remito.Fecha,
            Observaciones = remito.Observaciones
        };
    }
}