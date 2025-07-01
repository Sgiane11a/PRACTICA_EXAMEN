import Carrusel from "../components/Recursos/Carrusel"
import Gallery from "../components/Recursos/Gallery"

export const Recursos = () => {
    return (

        <main className="navbar-expand-lg bg-body-tertiary">
            <h1 className="text-center">Recursos</h1>
            <p className="text-center">( Aquí tienes algunos recursos )</p>
            <section className="container my-5">
                <h1>EJEMPLO DE CARRUSEL</h1>
                <div className="container my-5">
                    <Carrusel />
                </div>
            </section>

            <section className="container my-5">
                <h1>EJEMPLO DE UN GALERIA</h1>
                <div className="container my-5">
                    <Gallery />
                </div>
            </section>

        </main>
    )
}