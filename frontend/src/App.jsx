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
  const [loading, setLoading] = useState(false);

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

    if (!numeroRemito.trim())
      return setError("Debe ingresar un número de remito");

    if (!cliente.trim())
      return setError("Debe ingresar un cliente");

    if (!fecha)
      return setError("Debe ingresar una fecha");

    try {
      setLoading(true);

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

      await cargarRemitos();
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Ocurrió un error al guardar el remito"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <div className="mb-4">
        <h1>Gestión de Remitos</h1>
        <p className="text-muted mb-0">
          Challenge técnico - React + .NET 8 + PostgreSQL
        </p>
      </div>

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
        loading={loading}
        onSubmit={guardarRemito}
      />

      <RemitoTable remitos={remitos} />

      <footer className="text-center mt-5 text-muted">
        React • .NET 8 • PostgreSQL • Bootstrap
      </footer>
    </div>
  );
}

export default App;