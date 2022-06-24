import React from "react";
import Input from "./Input";

function Login(props){
  return (
  <div> <form className="form">
  <Input inputText={props.text} inputPassword={props.password} />
  <button type="submit">{props.login}</button>
</form></div>
);
}
export default Login;