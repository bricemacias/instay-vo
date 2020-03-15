import React from 'react';

import user from '../../../images/user-6.jpg';
import icons from '../../../images/sprite.svg';

import {
  Header as HeaderLayout,
  UserNav,
  UserNavIconBox,
  UserNavIcon,
  UserNavNotification,
  UserNavUserPhoto,
  UserNavUserName
} from '../../../styles/layout';

import Search from '../../../Components/Search';

const Header = props => {
  return (
    <>
      <HeaderLayout>
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
          <div>
            <UserNavUserPhoto src={user} alt="User photo" />
            <UserNavUserName>Sarah</UserNavUserName>
          </div>
        </UserNav>
      </HeaderLayout>
    </>
  );
};

export default Header;
