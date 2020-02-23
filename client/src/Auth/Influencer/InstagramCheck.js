import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import InstagramIcon from '@material-ui/icons/Instagram';
import InfoIcon from '@material-ui/icons/Info';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#7f9eb2' }
  },
  typography: {
    fontSize: 20
  }
});

const InstagramCheck = props => {
  const [instagram, setInstagram] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [infoText, setInfoText] = useState('');
  const [followers, setFollowers] = useState('');

  const handleCheck = async () => {
    var url = `https://www.instagram.com/${instagram}/?__a=1`;
    await setDisabled(true);
    axios
      .get(url)
      .then(async response => {
        if (response.data.graphql) {
          if (response.data.graphql.user) {
            if (response.data.graphql.user.edge_followed_by.count >= 5000) {
              await props.handleNext(instagram);
              //setDisabled(false);
            } else {
              setDisabled(false);
              setInfoText(`Sorry, you don't have enough followers to apply`);
              setFollowers(
                `You currently have ${response.data.graphql.user.edge_followed_by.count} followers, you need at least 5000 to apply`
              );
            }
          } else {
            setFollowers('');
            setInfoText('No user found');
            setDisabled(false);
          }
        } else {
          setFollowers('');
          setInfoText('No user found');
          setDisabled(false);
        }
      })
      .catch(err => {
        setFollowers('');
        setInfoText('No user found');
        setDisabled(false);
      });
    //.finally(setDisabled(false));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="signup-container">
        <h2 className="instagram-title">INSTAY</h2>
        <h3 className="signup-subtitle">Connect your Instagram account</h3>
        <InstagramIcon
          style={{ fontSize: 50, marginBottom: '1.3rem' }}
          color="secondary"
        />
        <div
          className="instagram-input"
          style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
            alignItems: 'center'
          }}
        >
          <TextField
            label="Instagram account"
            variant="outlined"
            size="small"
            color="primary"
            vakue={instagram}
            onChange={e => setInstagram(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon fontSize="small" />
                </InputAdornment>
              )
            }}
          />
          <Tooltip
            title="You need to have more than 5000 followers to apply"
            arrow
            className="info-button"
          >
            <InfoIcon />
          </Tooltip>
        </div>

        <Typography color="secondary">{infoText}</Typography>
        <Typography color="primary">{followers}</Typography>
        <div className="verification-text">
          <Typography>
            We verify your followers' number, your engagement rate and your
            estimated number of authentic followers{' '}
          </Typography>
        </div>
        <div className="verification-text-subtitle">
          <Typography variant="body2">
            Connect your account allows us to access your statistics, we can' t
            do anything with your account and we don' t have access to your
            password
          </Typography>
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleCheck}
          style={{ marginBottom: '2rem' }}
          disabled={disabled || !instagram}
        >
          Apply
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default InstagramCheck;
