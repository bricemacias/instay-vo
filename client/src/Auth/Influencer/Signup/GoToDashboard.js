import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#7f9eb2' }
  },
  typography: {
    fontSize: 20
  }
});

const Text = styled.div`
  text-align: center;
  width: 70%;
  margin: 1rem auto 2rem;
`;

const GoToDashboard = props => {
  return (
    <ThemeProvider theme={theme}>
      <div className="signup-container">
        <h2 className="instagram-title">INSTAY</h2>
        <h3 className="signup-subtitle">Registration successful</h3>

        <Text className="verification-text">
          <Typography>
            Thank you for signin in. An email was sent to you in order to
            confirm your registration. If your account gets successfully
            verified by our team, you will receive a second email to confirm it.
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
          onClick={() => props.history.push('/')}
          style={{ marginBottom: '2rem' }}
        >
          Go to Dashboard
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default withRouter(GoToDashboard);
