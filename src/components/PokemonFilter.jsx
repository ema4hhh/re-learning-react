import React, { useContext } from "react";
import styled from '@emotion/styled';
import PokemonContext from "../PokemonContext";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
  const { filter, setFilter } = useContext(PokemonContext);
  return <>
    <Input
    type='text'
    value={filter}
    onChange={(evt) => setFilter(evt.target.value)}
    />
  </>
}

export default PokemonFilter;