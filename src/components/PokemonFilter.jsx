import React from "react";
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../pokemonSlice';

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
  const filter = useSelector(state => state.pokemon.filter);
  const dispatch = useDispatch();
  
  return <>
    <Input
    type='text'
    value={filter}
    onChange={(evt) => dispatch(setFilter(evt.target.value))}
    />
  </>
}

export default PokemonFilter;