using Microsoft.EntityFrameworkCore;
using Remitera.Api.Models;

namespace Remitera.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Remito> Remitos => Set<Remito>();
}