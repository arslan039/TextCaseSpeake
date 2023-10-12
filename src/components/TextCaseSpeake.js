// WelcomeMessage.js
import React from 'react';

const TextCaseSpeake = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '83vh', 
    marginTop : "-50px",
    
  };

  const messageStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '20px',
    border: '2px solid #333',
    borderRadius: '30px',
    backgroundColor: '#f0f0f0',
    boxShadow : "5px 10px #888888",
  };

  return (
    <div style={containerStyle}>
      <div style={messageStyle}>
        Welcome to my app
      </div>
    </div>
  );
};

export default TextCaseSpeake;

