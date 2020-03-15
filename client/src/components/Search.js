import React from 'react';
import icons from '../images/sprite.svg';

import {
  Search as SearchLayout,
  SearchInput,
  SearchButton,
  SearchIcon
} from 'styles/components';

const Search = props => {
  return (
    <>
      <SearchLayout>
        <SearchInput type="text" placeholder="Search hotels or inluencers" />
        <SearchButton>
          <SearchIcon>
            <use xlinkHref={`${icons}#icon-magnifying-glass`} />
          </SearchIcon>
        </SearchButton>
      </SearchLayout>
    </>
  );
};

export default Search;
