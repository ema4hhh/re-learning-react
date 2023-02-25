import React from 'react';
import { Button } from '@mui/material';
import PropTypes from "prop-types";

import PokemonType from '../PokemonType';

const PokemonRow = ({ pokemon, onSelect }) => {
  return (
    <tr key={pokemon.id}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(', ')}</td>
      <td>
        <Button
          variant="contained"
          onClick={() => onSelect(pokemon)}
        >Select</Button>
      </td>
    </tr>
  );
}

export default PokemonRow;