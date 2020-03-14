import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MaterialTheme } from '../styles/MaterialThemes';

import styled from 'styled-components';
import { Container, Title, Subtitle } from '../styles/Auth/Auth';

import { OpacityScaleFull } from '../animations';

import SigninInfluencer from './Influencer/SigninInfluencer';
import SigninHotelOwner from './HotelOwner/SigninHotelOwner';

import Error from '../Components/Error';

const Grid = styled.div`
  display: grid;
  font-size: 1.7rem;
  height: 30vh;
  grid-template-rows: repeat(1, 55%);
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 50px;
  grid-column-gap: 7rem;
  margin: 0 1rem;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

const InfluencerSide = styled.div`
  margin-top: 3rem;
  grid-column: 1/2;
`;
const HotelOwnerSide = styled.div`
  margin-top: 3rem;
  grid-column: 2/-1;
`;

const AuthChoice = props => {
  return (
    <ThemeProvider theme={MaterialTheme}>
      <OpacityScaleFull>
        <Container>
          <Title>INSTAY</Title>
          <Subtitle>Choose your side</Subtitle>
          <Grid>
            <InfluencerSide>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => props.history.push('/SigninInfluencer')}
              >
                Influencer
              </Button>
            </InfluencerSide>
            <HotelOwnerSide>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => props.history.push('/SigninHotelOwner')}
              >
                Hotel Owner
              </Button>
            </HotelOwnerSide>
          </Grid>
        </Container>
      </OpacityScaleFull>
    </ThemeProvider>
  );
};

export default withRouter(AuthChoice);
