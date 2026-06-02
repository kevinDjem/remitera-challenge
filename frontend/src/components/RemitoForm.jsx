export default function RemitoForm({
  numeroRemito,
  setNumeroRemito,
  cliente,
  setCliente,
  fecha,
  setFecha,
  observaciones,
  setObservaciones,
  loading,
  onSubmit
}) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h4>Nuevo Remito</h4>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Número</label>
            <input
              className="form-control"
              value={numeroRemito}
              onChange={(e) => setNumeroRemito(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Cliente</label>
            <input
              className="form-control"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Fecha</label>
            <input
              type="date"
              className="form-control"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Observaciones</label>
            <textarea
              className="form-control"
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
            />
          </div>

          <button disabled={loading} className="btn btn-primary">
            {loading ? "Guardando..." : "Guardar"}
          </button>
        </form>
      </div>
    </div>
  );
}