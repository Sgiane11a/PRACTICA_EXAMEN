const CardList = ({ rickandmorty }) => {
  return (
    <section className="container mt-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {rickandmorty.map((r) => (
          <div key={r.id} className="r-card">
            <img src={r.img} alt={r.name} />
            <h2>{r.name}</h2>
            <p>Status: {r.status}</p>
            <p>Species: {r.species}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default CardList