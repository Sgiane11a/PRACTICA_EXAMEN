import { useEffect, useState } from "react";
import { useDragonStore } from "../store/dragon.store";
import CardList from "../components/DragonBall/CardList";


export const DragonPage = () => {
    const dragons = useDragonStore((state) => state.dragons);
    const getDragons = useDragonStore((state) => state.getDragons);
      const [search, setSearch] = useState("");
    useEffect(() => {
        getDragons();
    }, [getDragons]);
     const filteredDragons = dragons.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );
    return (
        <main>
            <h1 className="text-center">DragonBall</h1>
            <p className="text-center">Los personajes disponibles</p>

            <section className="container mt-5">
                <div className="input-group rounded">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <span className="input-group-text border-0" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </section>
            
            <CardList dragons={filteredDragons} />
        </main>
    )
}