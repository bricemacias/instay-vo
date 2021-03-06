import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MaterialTheme } from '../../../styles/MaterialThemes';

import styled from 'styled-components';
import { Container, Title, Subtitle } from '../../../styles/auth/auth';

import { OpacityScaleMedium } from '../../../animations/animations';

import Error from '../../../components/Error';

import { Mutation } from 'react-apollo';

import { SIGNUP_INFLUENCER } from '../../../graphql/influencer';

// Styles
const Form = styled.form`
  display: grid;
  font-size: 1.7rem;
  grid-template-rows: repeat(7, 50px);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin: 0 1rem;

  @media only screen and (max-width: ${p => p.theme.screen.smallest}) {
    grid-template-rows: repeat(9, 50px);
  }
`;

const FirstName = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;

  @media only screen and (max-width: ${p => p.theme.screen.smallest}) {
    grid-column: 1/-1;
  }
`;

const LastName = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;

  @media only screen and (max-width: ${p => p.theme.screen.smallest}) {
    grid-row: 2/3;
    grid-column: 1/-1;
  }
`;

const Username = styled.div`
  grid-row: 2/3;
  grid-column: 1/3;

  @media only screen and (max-width: ${p => p.theme.screen.smallest}) {
    grid-row: 3/4;
  }
`;

const Email = styled.div`
  grid-row: 3/4;
  grid-column: 1/3;

  @media only screen and (max-width: ${p => p.theme.screen.smallest}) {
    grid-row: 4/5;
  }
`;

const Password = styled.div`
  grid-row: 4/5;
  grid-column: 1/3;

  @media only screen and (max-width: ${p => p.theme.screen.smallest}) {
    grid-row: 5/6;
  }
`;

const Confirm = styled.div`
  grid-row: 5/6;
  grid-column: 1/3;

  @media only screen and (max-width: ${p => p.theme.screen.smallest}) {
    grid-row: 6/7;
  }
`;

const Agree = styled.div`
  grid-row: 6/7;
  grid-column: 1/3;

  @media only screen and (max-width: ${p => p.theme.screen.smallest}) {
    grid-row: 7/8;
  }
`;

const SignupButton = styled.div`
  grid-row: 7/8;
  grid-column: 1/3;
  justify-self: center;

  @media only screen and (max-width: ${p => p.theme.screen.smallest}) {
    grid-row: 8/9;
  }
`;

const SignupError = styled.div`
  grid-column: 1/3;
  justify-self: center;
  margin-bottom: 3rem;
`;

// Component

const SignupInfluencer = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [agree, setAgree] = useState(false);

  const clearState = () => {
    setFirstName('');
    setLastName('');
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirm('');
    setAgree('');
  };

  const handleSubmit = (e, signupInfluencer) => {
    e.preventDefault();
    signupInfluencer({
      variables: {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        instagram: props.instagramAccount,
        password: password
      }
    }).then(async ({ data }) => {
      console.log(data);
      localStorage.setItem('token', data.signupInfluencer.token);
      // await props.refetch();
      clearState();
      // props.history.push('/');
      await props.handleNext(prevActiveStep => prevActiveStep + 1);
    });
  };

  const validateForm = () => {
    const isInvalid =
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !password ||
      password !== confirm ||
      !agree;

    return isInvalid;
  };

  return (
    <ThemeProvider theme={MaterialTheme}>
      <OpacityScaleMedium>
        <Container>
          <Title>INSTAY</Title>
          <Subtitle>Please complete to create your account</Subtitle>
          <Mutation mutation={SIGNUP_INFLUENCER}>
            {(signupInfluencer, { data, loading, error }) => {
              return (
                <Form>
                  <FirstName>
                    <TextField
                      id="first-name"
                      label="First Name"
                      fullWidth
                      color="primary"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                    />
                  </FirstName>
                  <LastName>
                    <TextField
                      id="last-name"
                      label="Last Name"
                      fullWidth
                      color="primary"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                    />
                  </LastName>
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
                  <Email>
                    <TextField
                      id="email"
                      label="Email"
                      fullWidth
                      color="primary"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Email>
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
                  <Confirm>
                    <TextField
                      id="confirm-password"
                      label="Confirm Password"
                      inputProps={{ type: 'password' }}
                      fullWidth
                      color="primary"
                      value={confirm}
                      onChange={e => setConfirm(e.target.value)}
                    />
                  </Confirm>
                  <Agree>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={agree}
                          onChange={e => setAgree(e.target.checked)}
                          value="terms"
                        />
                      }
                      label="I agree with terms and conditions"
                    />
                  </Agree>
                  <SignupButton>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      onClick={e => handleSubmit(e, signupInfluencer)}
                      disabled={loading || validateForm()}
                    >
                      SIGN UP
                    </Button>
                  </SignupButton>
                  <SignupError>{error && <Error error={error} />}</SignupError>
                </Form>
              );
            }}
          </Mutation>
        </Container>
      </OpacityScaleMedium>
    </ThemeProvider>
  );
};

export default SignupInfluencer;
