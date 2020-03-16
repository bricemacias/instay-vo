import styled from 'styled-components';

export const Container = styled.div`
  max-width: 120rem;
  margin: 8rem auto;
  background-color: ${p => p.theme.colors.grey.light2};
  box-shadow: ${p => p.theme.shadows.dark};
  border-radius: 5px;
  display: flex;

  min-height: 50rem;

  @media only screen and (max-width: ${p => p.theme.screen.largest}) {
    margin: 0;
    max-width: 100%;
    width: 100%;
    height: 100vh;
  }

  &:not(:last-of-type) {
    margin-bottom: 30rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.div`
  font-size: 1.4rem;
  height: 7rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${p => p.theme.screen.smallest}) {
    flex-wrap: wrap;
    height: 10rem;
    align-content: space-between;
    justify-content: center;
  }

  background-color: #fff;
  border-bottom: solid 0.1rem ${p => p.theme.colors.grey.light2};
  border-width: 0;
  border-bottom-width: 0.15rem;
  border-style: solid;
  border-image: linear-gradient(
    to right,
    ${p => p.theme.colors.secondary.main},
    ${p => p.theme.colors.secondary.dark},
    ${p => p.theme.colors.secondary.main}
  );
  border-image-slice: 1;
  /* //box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.3); */
  z-index: 100;

  @media only screen and (max-width: ${p => p.theme.screen.smallest}) {
    align-content: space-around;
  }
`;

export const Sidebar = styled.nav`
  background-color: ${p => p.theme.colors.grey.dark1};

  flex: 0 0 18%;

  height: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: margin-left 0.2s ease-in-out;

  @media only screen and (max-width: ${p => p.theme.screen.medium716}) {
    flex: 0 0 10%;
    width: 13%;
    margin: 0;
  }

  @media only screen and (max-width: ${p => p.theme.screen.small}) {
    flex: 0 0 10%;
    width: 17%;
    margin: 0;
  }

  @media (min-width: ${p => p.theme.screen.smallest}) {
    padding-top: 0;
    position: sticky;
    top: 0;
    margin-left: ${p => (p.open ? 0 : `-180px`)};
    flex-basis: 180px;
    flex-grow: 0;
    flex-shrink: 0;
    border: 0;
  }

  @media (max-width: ${p => p.theme.screen.smallest}) {
    margin-left: ${p => (p.open ? 0 : `-240px`)};
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex: 1;
`;

export const MainView = styled.main`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  /* TEST
  background-color: orangered;
  height: 80rem; */

  flex: 1;
`;
