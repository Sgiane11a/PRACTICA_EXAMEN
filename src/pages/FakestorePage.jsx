import { useEffect, useState } from "react";
import { useFakestoreStore } from "../store/fakestore.store";
import CardList from "../components/Fakestore/CardList";


export const FakestorePage = () => {
    const fakestore = useFakestoreStore((state) => state.fakestore);
    const getFakestore = useFakestoreStore((state) => state.getFakestore);

    const [search, setSearch] = useState("");

    useEffect(() => {
        getFakestore();
    }, []);

    const filteredFakestore = fakestore.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <main>
            <h1 className="text-center">FAKESTORE</h1>
            <p className="text-center">Los Fakestore disponibles</p>

            <section className="container mt-5">
                <div className="input-group rounded">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <span className="input-group-text border-0" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </section>

            <CardList fakestore={filteredFakestore} />
        </main>
    )
}