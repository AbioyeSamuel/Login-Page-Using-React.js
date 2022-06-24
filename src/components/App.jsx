import React from "react";
import Login from "./Login";

var isLoggedIn = false;


function App() {
  return (
    <div className="container">
      isLoggedIn === true ? <h1>Hello</h1> <Login username="text" password="password" login="Login"/>
    </div>
  );
}

export default App;
