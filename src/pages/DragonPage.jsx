import { useEffect } from "react";
import { useDragonStore } from "../store/dragon.store";
import CardList from "../components/DragonBall/CardList";


export const DragonPage = () => {
     const dragons = useDragonStore((state) => state.dragons);
        const getDragons = useDragonStore((state) => state.getDragons);
        useEffect(() => {
            getDragons();
        }, [getDragons]);
    return (
       <main>
            <h1 className="text-center">Dragons</h1>
            <p className="text-center">Los DragonBall disponibles</p>
            <CardList dragons={dragons} />
       </main>
    )
}