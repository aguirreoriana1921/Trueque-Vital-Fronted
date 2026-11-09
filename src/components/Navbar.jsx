import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', backgroundColor: '#f5f5f5', alignItems: 'center' }}>
      <h1 style={{ color: '#2e7d32', margin: 0 }}>TruequeVital</h1>
      <div>
        <Link to="/" style={{ marginRight: '1rem', textDecoration: 'none', color: '#333' }}>Inicio</Link>
        <Link to="/login" style={{ marginRight: '1rem', textDecoration: 'none', color: '#333' }}>Ingresar</Link>
        <Link to="/register" style={{ textDecoration: 'none', color: '#333' }}>Registrarse</Link>
      </div>
    </nav>
  );
}

export default Navbar;