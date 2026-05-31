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
    try {
      setLoading(true);

      const response = await api.get("/api/remitos");
      setRemitos(response.data);

    } catch (err) {
      setError("Error al cargar remitos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarRemitos();
  }, []);

  const guardarRemito = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!numeroRemito.trim()) return setError("Debe ingresar un número de remito");
    if (!cliente.trim()) return setError("Debe ingresar un cliente");
    if (!fecha) return setError("Debe ingresar una fecha");

    try {
      await api.post("/api/remitos", {
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

    } catch (err) {
      setError("Ocurrió un error al guardar el remito");
    }
  };

  if (loading) {
    return <p>Cargando remitos...</p>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Remitera Challenge</h1>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

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