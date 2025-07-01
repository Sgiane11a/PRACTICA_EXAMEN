import { useEffect } from "react";
import CardList from "../components/RickAndMorty/CardList";
import { useRickAndMortyStore } from "../store/rickandmorty.store";

export const RickandmortyPage = () => {
    const rickandmorty = useRickAndMortyStore((state) => state.rickandmorty);
    const getRickAndMorty = useRickAndMortyStore((state) => state.getRickAndMorty);
    useEffect(() => {
        getRickAndMorty();
    }, [getRickAndMorty]);
    return (

        <main>
            <h1 className="text-center">Rick and Morty Characters</h1>
            <p className="text-center">This is a list of characters from the Rick and Morty series.</p>
            <CardList rickandmorty={rickandmorty} />
        </main>

    )
}

export default RickandmortyPage;