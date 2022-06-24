import React from "react";
import Login from "./Login";

var isLoggedIn = false;


function App() {
  return (
    <div className="container">
      if(isLoggedIn === true){
    return <h1>Hello</h1>
  } else {
    return <Login
    username="text"
    password="password"
    login="Login"
    />
  }
    </div>
  );
}

export default App;
