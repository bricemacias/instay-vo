import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
// import { withRouter } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MaterialTheme } from '../../../styles/MaterialThemes';

import styled from 'styled-components';
import { Container, Title, Subtitle } from '../../../styles/Auth/Auth';

import { OpacityScaleMedium } from '../../../animations';

import Error from '../../../Components/Error';

import { Query, Mutation } from 'react-apollo';

import { ADD_HOTEL } from '../../../graphql/hotel';
import { GET_HOTEL_OWNER_BY_USERNAME } from '../../../graphql/hotelOwner';

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
  // const { loading, error, data } = useQuery(GET_HOTEL_OWNER_BY_USERNAME, {
  //   variables: { username: props.username },
  //   fetchPolicy: 'no-cache'
  // });
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');

  // useEffect(() => {

  //   // const asyncFetch = async () => {
  //   //   <Query query={GET_HOTEL_OWNER_BY_USERNAME}>
  //   //     {(getHotelOwnerByUsername, { data, loading, error }) => {
  //   //       return getHotelOwnerByUsername({
  //   //         variables: { username: props.username }
  //   //       }).then(async ({ data }) => {
  //   //         console.log(data);
  //   //         // setOwner(data.id);
  //   //       });
  //   //     }}
  //   //   </Query>;
  //     // const data = await props.refetch();
  //     // console.log(data);
  // // };
  //   // asyncFetch();
  // }, []);

  // const getOwner = async () => {
  //   const { loading, error, data } = useQuery(GET_HOTEL_OWNER_BY_USERNAME, {
  //     variables: { username: props.username },
  //     fetchPolicy: 'no-cache'
  //   });
  //   return data;
  // };

  // useEffect(() => {
  //   console.log(data.getHotelOwnerByUsername.id);
  // }, []);

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
