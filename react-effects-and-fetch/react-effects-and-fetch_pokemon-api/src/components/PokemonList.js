import { useState } from "react";
import { useEffect } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(
    () =>
      async function loadPokemon() {
        try {
          const response = await fetch("https://pokeapi.co/api/v2/pokemon");
          const data = await response.json();
          console.log(data);
          setPokemon(data.results);
        } catch (error) {
          console.log(error);
        }
      },
    []
  );

  return (
    <main>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
