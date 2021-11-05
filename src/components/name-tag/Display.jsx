import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ submitGreet, submitName, submitPros }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'pink',
        color: 'black',
        border: '5px solid orange',
        margin: '20px',
        padding: '20px',
        width: '80%',
      }}
    >
      <h1
        style={{
          border: '3px solid orange',
          background: 'palevioletred',
        }}
      >
        {submitGreet}
      </h1>
      <h2
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid',
          background: 'white',
        }}
      >
        {' '}
        My name is
      </h2>
      <h1
        style={{
          border: '3px solid orange',
          background: 'palevioletred',
        }}
      >
        {submitName}
      </h1>
      <h2
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid',
          background: 'white',
        }}
      >
        {' '}
        My pronouns are
      </h2>
      <h1
        style={{
          border: '3px solid orange',
          background: 'palevioletred',
        }}
      >
        {submitPros}
      </h1>
    </div>
  );
};

Display.propTypes = {
  submitGreet: PropTypes.func.isRequired,
  submitName: PropTypes.func.isRequired,
  submitPros: PropTypes.func.isRequired,
};

export default Display;
