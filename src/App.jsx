import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

import './App.css';

const PokemonRow = ({ pokemon, onSelect }) => {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(', ')}</td>
      <td>
        <Button
          variant="contained"
          onClick={() => onSelect(pokemon)}
        >Select!</Button>
      </td>
    </tr>
  );
}

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }),
    type: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  onSelect: PropTypes.func.isRequired,
}

const PokemonInfo = ({ name, base }) => {
  return (
    <div>
      <h1>{name.english}</h1>
      <table>
        <tbody>
          {
            Object.keys(base).map((key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{base[key]}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string,
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    'Sp. Attack': PropTypes.number.isRequired,
    'Sp. Defense': PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  })
}

const Title = styled.h1`
  text-align: center;
`;
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;
const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;
const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

function App() {
  const [filter, setFilter] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5173/pokemon.json')
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, [])

  return (
    <Container>
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
          <Input
            value={filter}
            onChange={(evt) => setFilter(evt.target.value)}
          />
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemon
                .filter((pokemon) =>
                  pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
                )
                .slice(0, 20)
                .map((pokemon) => (
                  <PokemonRow pokemon={pokemon} onSelect={(pokemon) => setSelectedItem(pokemon)} key={pokemon.id} />
                ))}
            </tbody>
          </table>
        </div>
        {selectedItem && (
          <PokemonInfo {...selectedItem} />
        )}
      </TwoColumnLayout>
    </Container>
  );
}

export default App;
