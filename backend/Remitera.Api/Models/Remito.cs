namespace Remitera.Api.Models;

public class Remito
{
    public int Id { get; set; }

    public string NumeroRemito { get; set; } = string.Empty;

    public string Cliente { get; set; } = string.Empty;

    public DateTime Fecha { get; set; }

    public string? Observaciones { get; set; }
}