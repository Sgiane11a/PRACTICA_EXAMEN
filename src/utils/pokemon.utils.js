
export const adaptPokemon = ({ id, name, sprites, types }) => ({
  id,
  name,
  img: sprites.front_default,        
  types: types.map((t) => t.type.name) 
});
