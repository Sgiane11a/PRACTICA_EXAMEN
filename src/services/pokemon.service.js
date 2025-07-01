export const getPokemon = async () => {
  try {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=151',
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    );
    if (!response.ok) throw new Error('Network response was not ok');

    const list = await response.json();
    const promises = list.results.map(async ({ url }) => {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Detail fetch failed');
      return res.json();
    });

    const fullData = await Promise.all(promises);

    console.log(fullData);

    return fullData;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
  }
};
