import { useState } from "react";

export default function TruequeForm({ onAgregarTrueque }) {
  const [titulo, setTitulo] = useState("");
  const [ofrece, setOfrece] = useState("");
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Servicios");
  const [error, setError] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    setMensajeExito("");

    if (!titulo.trim() || !ofrece.trim() || !busca.trim()) {
      setError("Por favor completa el título, lo que ofreces y lo que buscas.");
      return;
    }

    setError("");

    const nuevoTrueque = {
      id: Date.now(),
      titulo: titulo.trim(),
      ofrece: ofrece.trim(),
      busca: busca.trim(),
      categoria,
      estado: "Disponible"
    };

    onAgregarTrueque(nuevoTrueque);

    setTitulo("");
    setOfrece("");
    setBusca("");
    setCategoria("Servicios");
    setMensajeExito("¡Trueque publicado correctamente!");
  };

  return (
    <form className="trueque-form" onSubmit={manejarEnvio}>
      <h3>Registrar nuevo trueque</h3>

      {error && <p className="mensaje-error">{error}</p>}
      {mensajeExito && <p className="mensaje-exito">{mensajeExito}</p>}

      <label>
        Título del intercambio *
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Ej. Clases de inglés"
        />
      </label>

      <label>
        ¿Qué ofreces? *
        <input
          type="text"
          value={ofrece}
          onChange={(e) => setOfrece(e.target.value)}
          placeholder="Ej. 2 horas semanales de conversación"
        />
      </label>

      <label>
        ¿Qué buscas a cambio? *
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Ej. Soporte técnico o diseño gráfico"
        />
      </label>

      <label>
        Categoría
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="Servicios">Servicios</option>
          <option value="Hogar">Hogar</option>
          <option value="Educación">Educación</option>
          <option value="Tecnología">Tecnología</option>
        </select>
      </label>

      <button type="submit">Guardar trueque</button>
    </form>
  );
}