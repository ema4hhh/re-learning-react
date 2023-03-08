import { createSlice, configureStore } from '@reduxjs/toolkit';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemonData: [],
    filter: "",
    selectedPokemon: null,
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    setPokemon: (state, action) => {
      state.pokemonData = action.payload
    },
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload
    }
  }
})

export const { setFilter, setPokemon, setSelectedPokemon  } = pokemonSlice.actions;

export default pokemonSlice.reducer;