import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();

console.log(currentTime);
function App() {
  return (
    <div className="container">
      {/* //Ternary Operator */}
      {/* isLoggedIn ? <h1>Hello</h1> <Login username="text" password="password" login="Login"/> */
    currentTime > 12 && <h1>Stop Working</h1> 
    //AND &&operator
    }</div>
  );
}

export default App;
