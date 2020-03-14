import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import { MaterialTheme } from '../../../styles/MaterialThemes';

import styled from 'styled-components';
import { Container, Title, Subtitle } from '../../../styles/Auth';

import { OpacityScaleMedium } from '../../../animations';

import Error from '../../../Components/Error';

import { Query, Mutation } from 'react-apollo';

import { ADD_HOTEL } from '../../../graphql/hotel';

import withHotelOwner from '../../../Components/utils/withHotelOwner';

// Styles
const Form = styled.form`
  display: grid;
  font-size: 1.7rem;
  grid-template-rows: repeat(6, 50px);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin: 0 1rem;
`;

const Name = styled.div`
  grid-row: 1/2;
  grid-column: 1/3;
`;

const Location = styled.div`
  grid-row: 2/3;
  grid-column: 1/3;
`;

const Website = styled.div`
  grid-row: 3/4;
  grid-column: 1/3;
`;

const AddButton = styled.div`
  grid-row: 4/5;
  grid-column: 1/3;
  justify-self: center;
`;

const AddError = styled.div`
  grid-column: 1/3;
  justify-self: center;
  margin-bottom: 3rem;
`;

// Component
const AddHotelOnSignup = props => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');

  const clearState = () => {
    setName('');
    setLocation('');
    setWebsite('');
  };

  const handleSubmit = (e, addHotel) => {
    e.preventDefault();
    addHotel({
      variables: {
        name: name,
        owner: props.hotelowner.getCurrentHotelOwner.id,
        location: location,
        website: website
      }
    }).then(async ({ data }) => {
      console.log(data);
      // localStorage.setItem('token', data.addHotel.token);
      // await props.refetch();
      clearState();
      // props.history.push('/');
      await props.handleNext();
    });
  };

  const validateForm = () => {
    const isInvalid = !name || !location || !website;

    return isInvalid;
  };

  return (
    <ThemeProvider theme={MaterialTheme}>
      <OpacityScaleMedium>
        <Container>
          <Title>INSTAY</Title>
          <Subtitle>
            Please complete to create your administrator account
          </Subtitle>
          <Mutation mutation={ADD_HOTEL}>
            {(addHotel, { data, loading, error }) => {
              return (
                <Form>
                  <Name>
                    <TextField
                      id="name"
                      label="Hotel Name"
                      fullWidth
                      color="primary"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </Name>
                  <Location>
                    <TextField
                      id="location"
                      label="Location"
                      fullWidth
                      color="primary"
                      value={location}
                      onChange={e => setLocation(e.target.value)}
                    />
                  </Location>
                  <Website>
                    <TextField
                      id="website"
                      label="Website"
                      fullWidth
                      color="primary"
                      value={website}
                      onChange={e => setWebsite(e.target.value)}
                    />
                  </Website>
                  <AddButton>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      onClick={e => handleSubmit(e, addHotel)}
                      disabled={loading || validateForm()}
                    >
                      SIGN UP
                    </Button>
                  </AddButton>
                  <AddError>{error && <Error error={error} />}</AddError>
                </Form>
              );
            }}
          </Mutation>
        </Container>
      </OpacityScaleMedium>
    </ThemeProvider>
  );
};

export default withHotelOwner(AddHotelOnSignup);
