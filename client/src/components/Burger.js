import React from 'react';
import { StyledBurger } from '../styles/components/burger';

const Burger = ({ setOpen }) => {
  return (
    <StyledBurger onClick={setOpen}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
