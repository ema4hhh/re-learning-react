import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import './App.css';

import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';

import { useDispatch, useSelector } from 'react-redux';
import { setPokemon } from './pokemonSlice'

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
  const pokemonData = useSelector(state => state.pokemon.pokemonData)
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetch('http://127.0.0.1:5173/pokemon.json')
      .then(response => response.json())
      .then(data => dispatch(setPokemon(data)));
  }, []);

  if (!pokemonData) {
    return <div>Loading data</div>;
  }

  return (
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
  );
}

export default App;

/* class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      pokemon: [],
      selectedPokemon: null,
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