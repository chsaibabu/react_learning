import React from 'react';

const HelloWorld = () => {

  function sayHello() {
    alert('Welcome To The 2022 New Year Party !');
  }
  
  return (
    <div className="login">
    
    <button onClick={sayHello}>Press
    </button>
    </div>
  );
};

export default HelloWorld;