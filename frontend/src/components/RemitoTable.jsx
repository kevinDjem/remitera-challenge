export default function RemitoTable({ remitos }) {
  const remitosOrdenados = [...remitos].sort(
    (a, b) => new Date(b.fecha) - new Date(a.fecha)
  );

  if (remitos.length === 0) {
    return (
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <h5>No hay remitos registrados</h5>
          <p className="text-muted mb-0">
            Cree el primer remito utilizando el formulario.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h4 className="mb-3">
          Listado de Remitos
        </h4>

        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead>
              <tr>
                <th>Número</th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Observaciones</th>
              </tr>
            </thead>

            <tbody>
              {remitosOrdenados.map((r) => (
                <tr key={r.id}>
                  <td>
                    <span className="badge bg-primary">
                      {r.numeroRemito}
                    </span>
                  </td>

                  <td>{r.cliente}</td>

                  <td>
                    {new Date(r.fecha)
                      .toLocaleDateString("es-AR")}
                  </td>

                  <td>{r.observaciones}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}