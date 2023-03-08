import React, { useContext } from "react";

import PokemonRow from "./PokemonRow";

import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPokemon } from "../pokemonSlice";

function PokemonTable() {
  const pokemonData = useSelector(state => state.pokemon.pokemonData);
  const filter = useSelector(state => state.pokemon.filter);
  const dispatch = useDispatch();

  return (
    <table width="100%">
      <tbody>
        {pokemonData
          .filter(({ name: { english } }) =>
            english.toLowerCase().includes(filter.toLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              pokemon={pokemon}
              key={pokemon.id}
              onSelect={() => dispatch(setSelectedPokemon(pokemon))
              }
            />
          ))}
      </tbody>
    </table>
  );
}

export default PokemonTable;