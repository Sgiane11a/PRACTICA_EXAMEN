import Carrusel from "../components/Recursos/Carrusel"

export const Recursos = () => {
    return (
        
        <main className="navbar-expand-lg bg-body-tertiary">
            <section className="container">   
            <h1 className="text-center">Recursos</h1>
            <p className="text-center">( Aquí tienes algunos recursos )</p>
            <h1>EJEMPLO DE CARRUSEL</h1>
            <div>
                <Carrusel />
            </div>
            </section>
        </main>
    )
}