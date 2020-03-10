import React, { useState } from 'react';
// import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Error from '../../../components/Error';

import { Mutation } from 'react-apollo';

import { SIGNUP_INFLUENCER } from '../../../graphql/mutations/influencer';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#7f9eb2' }
  },
  typography: {
    fontSize: 20
  }
});

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
      await props.refetch();
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
    <ThemeProvider theme={theme}>
      <div className="signup-container">
        <h2 className="signup-title">INSTAY</h2>
        <h3 className="signup-subtitle">
          Please complete to create your account
        </h3>
        <Mutation mutation={SIGNUP_INFLUENCER}>
          {(signupInfluencer, { data, loading, error }) => {
            return (
              <form className="signup-grid">
                <div className="first-name">
                  <TextField
                    id="first-name"
                    label="First Name"
                    fullWidth
                    color="primary"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                  />
                </div>
                <div className="last-name">
                  <TextField
                    id="last-name"
                    label="Last Name"
                    fullWidth
                    color="primary"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                </div>
                <div className="username">
                  <TextField
                    id="username"
                    label="Username"
                    fullWidth
                    color="primary"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
                <div className="email">
                  <TextField
                    id="email"
                    label="Email"
                    fullWidth
                    color="primary"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="password">
                  <TextField
                    id="password"
                    label="Password"
                    fullWidth
                    color="primary"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="confirm">
                  <TextField
                    id="confirm-password"
                    label="Confirm Password"
                    fullWidth
                    color="primary"
                    value={confirm}
                    onChange={e => setConfirm(e.target.value)}
                  />
                </div>
                <div className="agree">
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
                </div>
                <div className="apply">
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    onClick={e => handleSubmit(e, signupInfluencer)}
                    disabled={loading || validateForm()}
                  >
                    SIGN UP
                  </Button>
                </div>
                <div className="signup-error">
                  {error && <Error error={error} />}
                </div>
              </form>
            );
          }}
        </Mutation>
      </div>
    </ThemeProvider>
  );
};

export default SignupInfluencer;