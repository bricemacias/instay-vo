import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  margin: 20rem auto;

  border-width: 0;
  border-bottom-width: 0rem;
  border-style: solid;
  border-image: linear-gradient(to right, #eb2f64, #ff4081);
  border-image-slice: 1;
  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.3);
  z-index: 100;
  @media only screen and (max-width: ${p => p.theme.screen.smallest}) {
    height: 100vh;
    margin: 0;
  }
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.primary.dark};
  font-weight: 400;
  font-size: 3rem;
  letter-spacing: 0.5rem;
  margin: 4rem auto 1rem;
`;

export const Subtitle = styled.h3`
  color: ${p => p.theme.colors.grey.dark3};
  font-weight: 500;
  letter-spacing: 0.1rem;
  font-size: 1.2rem;
  margin: 0rem auto 2rem;
  text-align: center;
`;
