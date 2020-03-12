import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MaterialTheme } from '../../../styles/MaterialThemes';

import styled from 'styled-components';
import { Container, Title, Subtitle } from '../../../styles/Auth/Auth';

import { OpacityScaleMedium } from '../../../animations';

// Styles
const Text = styled.div`
  text-align: center;
  width: 70%;
  margin: 1rem auto 2rem;

  /* text-align: center;
  width: 80%;
  margin: 2rem auto 2rem; */
`;

// Component
const GoToDashboard = props => {
  const handleClick = async () => {
    await props.refetch();
    await props.history.push('/');
  };
  return (
    <ThemeProvider theme={MaterialTheme}>
      <OpacityScaleMedium>
        <Container>
          <Title>INSTAY</Title>
          <Subtitle>Registration successful</Subtitle>

          <Text>
            <Typography>
              Thank you for signin in. An email was sent to you in order to
              confirm your registration.
            </Typography>
            <br />
            <Typography>
              If your account gets successfully verified by our team, you will
              receive a second email to confirm it.
            </Typography>
            <br />
            <br />
            <Typography>
              <strong>
                In the meantime, feel free to explore the Dashboard!{' '}
              </strong>
            </Typography>
          </Text>

          <Button
            variant="contained"
            color="secondary"
            onClick={handleClick}
            style={{ marginBottom: '2rem' }}
          >
            Go to Dashboard
          </Button>
        </Container>
      </OpacityScaleMedium>
    </ThemeProvider>
  );
};

export default withRouter(GoToDashboard);
