import React from 'react';

const Twitter = ({twitterInputValue, handleTwitterInputChange}) => {
  return (
    <div>
      <h2>Twitter</h2>
      <input 
        type='text'
        onChange={handleTwitterInputChange}
        value={twitterInputValue}
      />
    </div>
  );
}

export default Twitter;