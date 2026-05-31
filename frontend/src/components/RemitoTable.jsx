export default function RemitoTable({ remitos }) {
    return (
        <div className="card">
            <div className="card-body">
                <h4>Listado de Remitos</h4>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Número</th>
                            <th>Cliente</th>
                            <th>Fecha</th>
                            <th>Observaciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {remitos.map((r) => (
                            <tr key={r.id}>
                                <td>{r.numeroRemito}</td>
                                <td>{r.cliente}</td>
                                <td>
                                    {new Date(r.fecha).toLocaleDateString("es-AR")}
                                </td>
                                <td>{r.observaciones}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}