const CardList = ({ pokemons }) => {
  return (
    <section className="container mt-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {pokemons.map((p) => (
          <div key={p.id} className="col d-flex justify-content-center">
            <div className="card h-100 text-center" style={{ maxWidth: '600px', width: '100%' }}>
              <div className="ratio ratio-4x3">
                <img
                  src={p.img}
                  alt={p.name}
                  className="card-img-top object-fit-contain"
                  style={{ padding: '0.58rem' }}
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">Raza: {p.types}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardList;
