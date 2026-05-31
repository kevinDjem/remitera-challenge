import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [remitos, setRemitos] = useState([]);

  const [numeroRemito, setNumeroRemito] = useState("");
  const [cliente, setCliente] = useState("");
  const [fecha, setFecha] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const cargarRemitos = async () => {
    const response = await api.get("/remitos");
    setRemitos(response.data);
  };

  useEffect(() => {
    cargarRemitos();
  }, []);

  const guardarRemito = async (e) => {
    e.preventDefault();

    await api.post("/remitos", {
      numeroRemito,
      cliente,
      fecha,
      observaciones,
    });

    setNumeroRemito("");
    setCliente("");
    setFecha("");
    setObservaciones("");

    cargarRemitos();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Remitera</h1>

      <form onSubmit={guardarRemito}>
        <div>
          <input
            placeholder="Número de remito"
            value={numeroRemito}
            onChange={(e) => setNumeroRemito(e.target.value)}
          />
        </div>

        <div>
          <input
            placeholder="Cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />
        </div>

        <div>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div>
          <textarea
            placeholder="Observaciones"
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
          />
        </div>

        <button type="submit">
          Guardar
        </button>
      </form>

      <hr />

      <h2>Listado de Remitos</h2>

      <table border="1">
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
              <td>{r.fecha}</td>
              <td>{r.observaciones}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;