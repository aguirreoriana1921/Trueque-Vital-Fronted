function Home() {
  const products = [
    { 
      id: 1, 
      title: 'Saco de Papas', 
      category: 'Agricultura', 
      description: 'Cosechadas esta semana, sin pesticidas. Busco semillas de tomate o herramientas manuales.' 
    },
    { 
      id: 2, 
      title: 'Gallinas', 
      category: 'Ganadería', 
      description: 'Jóvenes y activas, ponen diariamente. Cambio por bultos de alfalfa o alimento para aves.' 
    },
    { 
      id: 3, 
      title: 'Cestas', 
      category: 'Artesanía', 
      description: 'Tejido artesanalmente con mimbre local. Busco miel de abeja pura o conservas caseras.' 
    }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Artículos Disponibles para Trueque</h2>
      <p style={{ color: '#666' }}>Explora los objetos que otros usuarios quieren intercambiar en TruequeVital:</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {products.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', backgroundColor: '#fafafa' }}>
            <span style={{ fontSize: '12px', backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
              {item.category}
            </span>
            <h3 style={{ margin: '10px 0 5px 0', fontSize: '18px' }}>{item.title}</h3>
            <p style={{ fontSize: '14px', color: '#555' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
