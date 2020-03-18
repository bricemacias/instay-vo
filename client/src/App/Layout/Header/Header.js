import React from 'react';

import user from '../../../images/user-6.jpg';
import icons from '../../../images/sprite.svg';

import { withRouter } from 'react-router-dom';

import { withApollo } from 'react-apollo';

import {
  Header as HeaderLayout,
  UserNav,
  UserNavIconBox,
  UserNavIcon,
  UserNavNotification,
  UserNavUserPhoto,
  UserNavUserName
} from '../../../styles/layout';

import Search from '../../../components/Search';
import Burger from '../../../components/Burger';

const Header = ({ client, history, setOpen, open }) => {
  // SIGNOUT FUNCTION TO PUT IN DROPDOWN, NOT HERE !
  const handleSignOut = async () => {
    localStorage.removeItem('token');
    client.resetStore();
    history.push('/');
  };

  return (
    <>
      <HeaderLayout>
        <Burger open={open} setOpen={setOpen} />
        <Search />
        <UserNav>
          <UserNavIconBox>
            <UserNavIcon>
              <use xlinkHref={`${icons}#icon-bell`} />
            </UserNavIcon>
            <UserNavNotification>7</UserNavNotification>
          </UserNavIconBox>
          <UserNavIconBox>
            <UserNavIcon>
              <use xlinkHref={`${icons}#icon-bubbles2`} />
            </UserNavIcon>
            <UserNavNotification>13</UserNavNotification>
          </UserNavIconBox>
          <div onClick={handleSignOut}>
            <UserNavUserPhoto src={user} alt="User photo" />
            <UserNavUserName>Sarah</UserNavUserName>
          </div>
        </UserNav>
      </HeaderLayout>
    </>
  );
};

export default withRouter(withApollo(Header));
