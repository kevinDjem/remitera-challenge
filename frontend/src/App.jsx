import { useEffect, useState } from "react";
import api from "./services/api";
import RemitoForm from "./components/RemitoForm";
import RemitoTable from "./components/RemitoTable";

function App() {
  const [remitos, setRemitos] = useState([]);

  const [numeroRemito, setNumeroRemito] = useState("");
  const [cliente, setCliente] = useState("");
  const [fecha, setFecha] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const cargarRemitos = async () => {

    setLoading(true);

    const response = await api.get("/remitos");
    setRemitos(response.data);
    setLoading(false);
  };

  useEffect(() => {
    cargarRemitos();
  }, []);

  const guardarRemito = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!numeroRemito.trim()) {
      setError("Debe ingresar un número de remito");
      return;
    }

    if (!cliente.trim()) {
      setError("Debe ingresar un cliente");
      return;
    }

    if (!fecha) {
      setError("Debe ingresar una fecha");
      return;
    }

    try {
      await api.post("/remitos", {
        numeroRemito,
        cliente,
        fecha,
        observaciones,
      });

      setSuccess("Remito guardado correctamente");

      setNumeroRemito("");
      setCliente("");
      setFecha("");
      setObservaciones("");

      cargarRemitos();
    } catch {
      setError("Ocurrió un error al guardar el remito");
    }
  };
  if (loading) {
    return <p>Cargando remitos...</p>;
  }
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Remitera Challenge</h1>
      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      {success && (
        <div className="alert alert-success">
          {success}
        </div>
      )}

      <RemitoForm
        numeroRemito={numeroRemito}
        setNumeroRemito={setNumeroRemito}
        cliente={cliente}
        setCliente={setCliente}
        fecha={fecha}
        setFecha={setFecha}
        observaciones={observaciones}
        setObservaciones={setObservaciones}
        onSubmit={guardarRemito}
      />

      <RemitoTable remitos={remitos} />
    </div>
  );
}

export default App;