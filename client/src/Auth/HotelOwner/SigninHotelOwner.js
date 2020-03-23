import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import { MaterialTheme } from '../../styles/MaterialThemes';

import styled from 'styled-components';
import { Container, Title, Subtitle } from '../../styles/auth/auth';

import { OpacityScaleMedium } from '../../animations/animations';

import Error from '../../components/Error';

import { Mutation } from 'react-apollo';

import { SIGNIN_HOTEL_OWNER } from '../../graphql/hotelOwner';

// Styles

const Form = styled.form`
  display: grid;
  font-size: 1.7rem;
  grid-template-rows: repeat(4, 50px);
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 50px;
  grid-column-gap: 10px;
  margin: 0 1rem;
`;

const Username = styled.div`
  margin-top: 3rem;
  grid-row: 0/1;
  grid-column: 1/3;
`;

const Password = styled.div`
  grid-row: 2/3;
  grid-column: 1/3;
`;

const SignupButton = styled.div`
  grid-row: 3/4;
  grid-column: 1/2;
  justify-self: center;
`;

const SigninButton = styled.div`
  grid-row: 3/4;
  grid-column: 2/3;
  justify-self: center;
`;

const SigninError = styled.div`
  grid-column: 1/3;
  justify-self: center;
  margin-bottom: 3rem;
`;

// Component

const SigninHotelOwner = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const clearState = () => {
    setUsername('');
    setPassword('');
  };

  const handleSubmit = (e, signinHotelOwner) => {
    e.preventDefault();
    signinHotelOwner({
      variables: {
        username: username,
        password: password
      }
    }).then(async ({ data }) => {
      console.log(data);
      window.localStorage.setItem('token', `${data.signinHotelOwner.token}`);
      await clearState();
      await props.refetch();
      props.history.push('/');
    });
  };

  const validateForm = () => {
    const isInvalid = !username || !password;

    return isInvalid;
  };

  return (
    <ThemeProvider theme={MaterialTheme}>
      <OpacityScaleMedium>
        <Container signin={true}>
          <Title>INSTAY</Title>
          <Subtitle>Welcome back! Please login to you account</Subtitle>
          <Mutation mutation={SIGNIN_HOTEL_OWNER}>
            {(signinHotelOwner, { data, loading, error }) => {
              return (
                <Form>
                  <Username>
                    <TextField
                      id="username"
                      label="Username"
                      fullWidth
                      color="primary"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                  </Username>
                  <Password>
                    <TextField
                      id="password"
                      label="Password"
                      inputProps={{ type: 'password' }}
                      fullWidth
                      color="primary"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Password>
                  <SignupButton>
                    <Button
                      variant="contained"
                      onClick={e => props.history.push('/SignupHotelOwner')}
                    >
                      SIGN UP
                    </Button>
                  </SignupButton>
                  <SigninButton>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      onClick={e => handleSubmit(e, signinHotelOwner)}
                      disabled={loading || validateForm()}
                    >
                      SIGN IN
                    </Button>
                  </SigninButton>
                  <SigninError>{error && <Error error={error} />}</SigninError>
                </Form>
              );
            }}
          </Mutation>
        </Container>
      </OpacityScaleMedium>
    </ThemeProvider>
  );
};

export default withRouter(SigninHotelOwner);
