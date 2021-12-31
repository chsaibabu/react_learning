import React from 'react';

const HelloWorld = () => {

  function sayHello() {
    alert('Welcome!');
  }
  
  return (
    <div className="login">
    
    <button onClick={sayHello}>Login
    </button>
    </div>
  );
};

export default HelloWorld;