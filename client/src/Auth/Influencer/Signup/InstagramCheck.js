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
import { ThemeProvider } from '@material-ui/core/styles';
import { MaterialTheme } from '../../../styles/MaterialThemes';

import styled from 'styled-components';
import { Container, Title, Subtitle } from '../../../styles/auth/auth';

import { OpacityScaleMedium } from '../../../animations/animations';

// Styles
const InstagramInput = styled.div`
  width: 40%;
  margin-bottom: 1rem;
  margin-left: 1rem;
  display: flex;
  align-content: center;
  justify-content: center;
  justify-items: center;
  align-items: center;

  @media only screen and (max-width: ${p => p.theme.screen.smallest}) {
    width: 55%;
  }
  @media only screen and (max-width: ${p => p.theme.screen.smallest400}) {
    width: 70%;
  }
`;

const InfoButton = styled(Tooltip)`
  margin-left: 0.3rem;
`;

const VerificationText = styled.div`
  text-align: center;
  width: 80%;
  margin: 2rem auto 2rem;
`;

const VerificationTextSubtitle = styled.div`
  text-align: center;
  width: 70%;
  color: ${p => p.theme.colors.grey.light4};
  margin: 0 auto 3rem;
`;
// Component
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
    <ThemeProvider theme={MaterialTheme}>
      <OpacityScaleMedium>
        <Container>
          <Title>INSTAY</Title>
          <Subtitle>Connect your Instagram account</Subtitle>
          <InstagramIcon
            style={{ fontSize: 50, marginBottom: '1.3rem' }}
            color="secondary"
          />
          <InstagramInput>
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
            <InfoButton
              title="You need to have more than 5000 followers to apply"
              arrow
            >
              <InfoIcon />
            </InfoButton>
          </InstagramInput>

          <Typography color="secondary">{infoText}</Typography>
          <Typography color="primary">{followers}</Typography>
          <VerificationText>
            <Typography>
              We verify your followers' number, your engagement rate and your
              estimated number of authentic followers{' '}
            </Typography>
          </VerificationText>
          <VerificationTextSubtitle>
            <Typography variant="body2">
              Connect your account allows us to access your statistics, we can'
              t do anything with your account and we don' t have access to your
              password
            </Typography>
          </VerificationTextSubtitle>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCheck}
            style={{ marginBottom: '2rem' }}
            disabled={disabled || !instagram}
          >
            Apply
          </Button>
        </Container>
      </OpacityScaleMedium>
    </ThemeProvider>
  );
};

export default InstagramCheck;
