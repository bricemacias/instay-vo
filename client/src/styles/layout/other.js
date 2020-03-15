import styled from 'styled-components';

export const OtherContainer = styled.div`
  max-width: 120rem;
  margin: 8rem auto;
  background-color: ${p => p.theme.colors.grey.light2};
  box-shadow: ${p => p.theme.shadows.dark};
  border-radius: 5px;

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

export const OtherContent = styled.div`
  display: flex;
  /* height: 100vh;

  @media only screen and (max-width: $bp-small) {
    flex-direction: column;
  } */
`;

export const LogoHeader = styled.div`
  flex: 0 0 18%;
  font-size: 1.3rem;
  height: 7rem;
  box-shadow: ${p => p.theme.shadows.light};
  background-color: ${p => p.theme.colors.primary.main};
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${p => p.theme.screen.smallest}) {
    flex: 1;
  }
  /* border-top-left-radius: 3px;
  border-bottom: 0.1rem solid white;
  border-right: 0.1rem solid white; */
`;

export const LogoTitle = styled.h1`
  font-weight: inherit;
  letter-spacing: 0.5rem;
  display: inline-block;
  transition: all 0.5s;

  margin-left: 5rem;
  @media only screen and (max-width: ${p => p.theme.screen.smallest}) {
    flex: 1;
    font-size: 1.4rem;
  }

  &:hover {
    color: ${p => p.theme.colors.primary.dark};
  }
`;

export const HeaderDark = styled.header`
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
  background-color: ${p => p.theme.colors.grey.light2};
  border-bottom: ${p => p.theme.colors.grey.light2};

  border-top-right-radius: 3px;

  @media only screen and (max-width: ${p => p.theme.screen.largest}) {
    border-top-right-radius: 0;
  }
`;
