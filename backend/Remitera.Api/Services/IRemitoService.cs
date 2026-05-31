using Remitera.Api.Dtos;

namespace Remitera.Api.Services;

public interface IRemitoService
{
    Task<List<RemitoResponse>> GetAllAsync();
    Task<RemitoResponse> CreateAsync(CreateRemitoRequest request);
}