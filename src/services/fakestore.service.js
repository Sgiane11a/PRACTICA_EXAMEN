export const getFakestore = async () => {
  try {
    const response = await fetch(
      'https://fakestoreapi.com/products',
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    );
    if (!response.ok) throw new Error('Network response was not ok');
    const list = await response.json();
    console.log(list);
    return list;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    return [];
  }
};
