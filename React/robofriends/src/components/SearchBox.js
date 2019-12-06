import React from 'react';

const SearchBox = ({ searchFeild, searchChange }) => {
  return (
    <div className='pa3 ba b--green bg-lightest-blue'>
      <input type='search' placeholder='search robots' onChange={searchChange}/>
    </div>
  );
}

export default SearchBox;
