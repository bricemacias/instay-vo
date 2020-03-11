import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Error from '../../components/Error';

import { Mutation } from 'react-apollo';

import { SIGNIN_INFLUENCER } from '../../graphql/influencer';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#7f9eb2' }
  },
  typography: {
    fontSize: 20
  }
});

const SigninInfluencer = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const clearState = () => {
    setUsername('');
    setPassword('');
  };

  const handleSubmit = (e, signinInfluencer) => {
    e.preventDefault();
    signinInfluencer({
      variables: {
        username: username,
        password: password
      }
    }).then(async ({ data }) => {
      console.log(data);
      window.localStorage.setItem('token', `${data.signinInfluencer.token}`);
      await props.refetch();
      clearState();
      props.history.push('/');
    });
  };

  const validateForm = () => {
    const isInvalid = !username || !password;

    return isInvalid;
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="signin-container">
        <h2 className="signin-title">INSTAY</h2>
        <h3 className="signin-subtitle">
          Welcome back! Please login to you account
        </h3>
        <Mutation mutation={SIGNIN_INFLUENCER}>
          {(signinInfluencer, { data, loading, error }) => {
            return (
              <form className="signin-grid">
                <div className="username-login">
                  <TextField
                    id="username"
                    label="Username"
                    fullWidth
                    color="primary"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
                <div className="password-login">
                  <TextField
                    id="password"
                    label="Password"
                    fullWidth
                    color="primary"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="signin-button">
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    onClick={e => handleSubmit(e, signinInfluencer)}
                    disabled={loading || validateForm()}
                  >
                    SIGN IN
                  </Button>
                </div>
                <div className="signin-error">
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

export default withRouter(SigninInfluencer);
