import React from 'react';

const Twitter = ({twitterInputValue, handleTwitterInputChange, handleTwitterSearchClick, tweetValues}) => {
  return (
    <div>
      <h2>Twitter</h2>
      <input 
        type='text'
        onChange={handleTwitterInputChange}
        value={twitterInputValue}
      />
      <button onClick={handleTwitterSearchClick}> Do the Thing </button>
      <br />
      <ul>
        { tweetValues.map(url => <li>{url}</li>) }
      </ul>
    </div>
  );
}

export default Twitter;