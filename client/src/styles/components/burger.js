import styled from 'styled-components';

// export const StyledBurger = styled.button`
//   left: 2rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 2rem;
//   height: 2rem;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   z-index: 1000;
//   margin-left: 2em;

//   &:focus {
//     outline: none;
//   }

//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background: ${p => p.theme.colors.grey.dark1};
//     border-radius: 10px;
//     transition: all 0.3s linear;
//     position: relative;
//     transform-origin: 1px;

//     :first-child {
//       transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
//     }

//     :nth-child(2) {
//       opacity: ${({ open }) => (open ? '0' : '1')};
// transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
//     }

//     :nth-child(3) {
// transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
//     }
//   }
// `;

export const StyledBurger = styled.button`
  left: 2rem;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
  /* width: 2rem;
  height: 2rem; */
  @media (min-width: ${p => p.theme.screen.largest}) {
    display: none;
  }
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;
  margin-left: 2em;
  height: 2.7rem;
  width: 2.7rem;
  border-radius: 50%; 
  background-color: ${p => p.open && `${p.theme.colors.grey.light2}`};

  z-index: 2000;
  text-align: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  span {
    position: relative;
    margin-top: 1.3rem;
    margin-left: 0.5rem;

    &,
    &::before,
    &::after {
      width: 2.7rem;
      height: 1px;
      background-color: ${p => p.theme.colors.grey.dark3};
      display: inline-block;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      transition: all 0s;
      /* transition-delay: 0.4s; */
    }
/* 
    &::before {
    top: -0.7rem 
    }
    &::after {
    top: 0.7rem 
    } */
  }

  &:hover span::before {
    /* top: ${({ open }) => (!open ? '-1rem' : '-0.8rem')}; */
   ${({ open }) => !open && { top: '-0.9rem' }}
  }

  &:hover span::after {
    /* top: ${({ open }) => (!open ? '1rem' : '0.8rem')}; */
    ${({ open }) => !open && { top: '0.9rem' }}
  }
  & span {
    background-color: ${({ open }) =>
      open ? 'transparent' : `${p => p.theme.colors.grey.dark3}`};
  }

  & span::before {
    top: ${({ open }) => (open ? '0' : '-0.7rem')};
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    background-color: ${({ open }) =>
      !open ? `${p => p.theme.colors.grey.dark3}` : 'white'};
    width: ${({ open }) => (open ? `1.8rem` : '2.7rem')};
  }
  & span::after {
    top: ${({ open }) => (open ? '0' : '0.7rem')};
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    background-color: ${({ open }) =>
      !open ? `${p => p.theme.colors.grey.dark3}` : 'white'};
    width: ${({ open }) => (open ? `1.8rem` : '2.7rem')};
  }
`;
