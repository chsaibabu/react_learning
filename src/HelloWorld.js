import React from 'react';

const HelloWorld = () => {

  function sayHello() {
    alert('Welcome!');
  }
  
  return (
    <div className="login">
    <h1>Login</h1>
    <p>Welcome! Enter your user name and password to access your account.</p>
    <form>
      <input text="type" placeholder="Username" />
      <input text="type" placeholder="password" />
      <span>-----Forgent your password ?-----</span>
    </form>
    <button onClick={sayHello}>Login
    </button>
    </div>
  );
};

export default HelloWorld;