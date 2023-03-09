import { create } from 'zustand';

const useStore = create(set => ({
  pokemon: [],
  filter: "",
  selectedPokemon: null,
  setPokemon: (pokemon) => set(state => ({
    ...state,
    pokemon,
  })),
  setFilter: (filter) => set(state => ({
    ...state,
    filter,
  })),
  setSelectedPokemon: (selectedPokemon) => set(state => ({
    ...state,
    selectedPokemon,
  })),
}));

fetch('http://127.0.0.1:5173/pokemon.json')
  .then(response => response.json())
  .then(pokemon => useStore.setState(state => ({
    ...state,
    pokemon,
  }))
  );

export default useStore;