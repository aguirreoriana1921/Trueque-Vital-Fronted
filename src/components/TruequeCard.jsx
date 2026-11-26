export default function TruequeCard({ trueque }) {
  return (
    <article className="trueque-card">
      <div className="trueque-header">
        <span className="badge">{trueque.categoria}</span>
        <span className="estado">{trueque.estado}</span>
      </div>

      <h3>{trueque.titulo}</h3>
      <p><strong>Ofrece:</strong> {trueque.ofrece}</p>
      <p><strong>Busca a cambio:</strong> {trueque.busca}</p>
    </article>
  );
}