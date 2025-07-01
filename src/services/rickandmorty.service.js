export const getRickAndMorty = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        return data.results;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}