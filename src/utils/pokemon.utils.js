
export const adaptPokemon = ({ id, name, sprites, types }) => ({
  id,
  name,
  img: sprites.front_shiny,        
  types: types.map((t) => t.type.name) 
});
