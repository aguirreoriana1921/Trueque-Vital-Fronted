import { useState } from "react";
import { mockTruequesIniciales } from "./data/mockTrueques";
import Navbar from "./components/Navbar";
import TruequeCard from "./components/TruequeCard";
import TruequeForm from "./components/TruequeForm";
import "./App.css";

export default function App() {
  const [trueques, setTrueques] = useState(mockTruequesIniciales);
  const [moduloActivo, setModuloActivo] = useState("catalogo");
  const [filtroCategoria, setFiltroCategoria] = useState("Todas");

  const agregarTrueque = (nuevoTrueque) => {
    setTrueques((prev) => [nuevoTrueque, ...prev]);
    setModuloActivo("catalogo");
  };

  const truequesFiltrados =
    filtroCategoria === "Todas"
      ? trueques
      : trueques.filter((item) => item.categoria === filtroCategoria);

  return (
    <div className="app-container">
      <Navbar
        moduloActivo={moduloActivo}
        setModuloActivo={setModuloActivo}
      />

      <main className="main-content">
        {moduloActivo === "catalogo" && (
          <section>
            <div className="catalogo-encabezado">
              <h2>Catálogo de Trueques</h2>
              <select
                value={filtroCategoria}
                onChange={(e) => setFiltroCategoria(e.target.value)}
              >
                <option value="Todas">Todas las categorías</option>
                <option value="Servicios">Servicios</option>
                <option value="Hogar">Hogar</option>
                <option value="Educación">Educación</option>
                <option value="Tecnología">Tecnología</option>
              </select>
            </div>

            <div className="grid-trueques">
              {truequesFiltrados.map((item) => (
                <TruequeCard key={item.id} trueque={item} />
              ))}
            </div>
          </section>
        )}

        {moduloActivo === "publicar" && (
          <section>
            <TruequeForm onAgregarTrueque={agregarTrueque} />
          </section>
        )}

        {moduloActivo === "mis-trueques" && (
          <section>
            <h2>Mis Trueques Activos</h2>
            <div className="grid-trueques">
              {trueques.slice(0, 2).map((item) => (
                <TruequeCard key={item.id} trueque={item} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}