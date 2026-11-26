export default function Navbar({ moduloActivo, setModuloActivo }) {
  return (
    <nav className="navbar">
      <h2>TruequeVital</h2>
      <div className="nav-buttons">
        <button
          className={moduloActivo === "catalogo" ? "activo" : ""}
          onClick={() => setModuloActivo("catalogo")}
        >
          Catálogo
        </button>
        <button
          className={moduloActivo === "publicar" ? "activo" : ""}
          onClick={() => setModuloActivo("publicar")}
        >
          Publicar trueque
        </button>
        <button
          className={moduloActivo === "mis-trueques" ? "activo" : ""}
          onClick={() => setModuloActivo("mis-trueques")}
        >
          Mis trueques
        </button>
      </div>
    </nav>
  );
}