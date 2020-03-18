import React from 'react';
import { StyledBurger } from '../styles/components/burger';

// const Burger = ({ open, setOpen }) => {
//   return (
//     <StyledBurger open={open} onClick={setOpen}>
//       <div />
//       <div />
//       <div />
//     </StyledBurger>
//   );
// };

// export default Burger;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={setOpen}>
      <span>&nbsp;</span>
    </StyledBurger>
  );
};

export default Burger;
