using System.ComponentModel.DataAnnotations;

namespace Remitera.Api.Dtos;

public class CreateRemitoRequest
{
    [Required]
    [MaxLength(50)]
    public string NumeroRemito { get; set; } = string.Empty;

    [Required]
    [MaxLength(200)]
    public string Cliente { get; set; } = string.Empty;

    [Required]
    public DateTime Fecha { get; set; }

    [MaxLength(500)]
    public string? Observaciones { get; set; }
}