import React from "react";

function Input(props){
  return (
  <div><input type={props.inputText} placeholder="Username" />
  <input type={props.inputPassword} placeholder="Password" /></div>
  );
}

export default Input;