import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import './App.css';

import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonContext from './PokemonContext';


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
    <PokemonContext.Provider
      value={{
        filter,
        setFilter,
        pokemon,
        setPokemon,
        selectedItem,
        setSelectedItem,
      }}
    >
      <Container>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>
      </Container>
    </PokemonContext.Provider>
  );
}

export default App;

/* class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      pokemon: [],
      selectedItem: null,
    }
  }

  componentDidMount() {
    fetch('http://127.0.0.1:5173/pokemon.json')
      .then(response => response.json())
      .then(data => this.setState({
        ...this.state,
        pokemon: data,
      }));
  }

  render() {
    return (
      <Container>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <Input
              value={this.state.filter}
              onChange={(evt) => this.setState({
                ...this.state,
                filter: evt.target.value
              })}
            />
            <table width="100%">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {this.state.pokemon
                  .filter((pokemon) =>
                    pokemon.name.english.toLowerCase().includes(this.state.filter.toLowerCase())
                  )
                  .slice(0, 20)
                  .map((pokemon) => (
                    <PokemonRow
                      pokemon={pokemon}
                      onSelect={(pokemon) => this.setState({
                        ...this.state,
                        selectedItem: pokemon
                      })} 
                      key={pokemon.id} />
                  ))}
              </tbody>
            </table>
          </div>
          {this.state.selectedItem && (
            <PokemonInfo {...this.state.selectedItem} />
          )}
        </TwoColumnLayout>
      </Container>
    );
  }
} */