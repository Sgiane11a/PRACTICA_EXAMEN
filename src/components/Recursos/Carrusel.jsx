
const Carrusel = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToyCHqxLyOXORwihqmRAqf33Ht7CZZt1_F5A&s" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Primera Imagen</h5>
                        <p>esta es la descripción de la primera imagen</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://blog.jumboprinters.com/wp-content/uploads/2021/09/consejos-imagenes.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Segunda Imagen</h5>
                        <p>Esta es la descripcion de la segunda imagen</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9db5/live/48fd9010-c1c1-11ee-9519-97453607d43e.jpg.webp" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Tercera imagen</h5>
                        <p>Esta es la descripcion de la tercera imagen</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carrusel;