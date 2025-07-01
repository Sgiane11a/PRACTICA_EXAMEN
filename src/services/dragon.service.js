export const getDragon = async () => {
    try {
        const response = await fetch('https://dragonball-api.com/api/characters', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data.items;
    } catch (error) {
        console.error('Error fetching data:', error);
        
    }
}