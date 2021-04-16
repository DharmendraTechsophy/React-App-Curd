import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Grid from '@material-ui/core/Grid'
import react, { useState } from 'react';
import Axios from 'axios';
import { NavLink, useHistory } from "react-router-dom"
import AuthApi from './AuthApi'
import Cookies from 'js-cookie'
const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const Auth = react.useContext(AuthApi)

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  const history = useHistory();

  const login = () => {
    if (validateForm()) {
      Axios.post("http://localhost:9000/user/search", {
        firstName: "",
        lastName: "",
        userName: username,
        email: "",
        password: password,
        createdDate: "2021-04-14"
      }).then((response) => {
        if (response.data == null)
          alert("Login Failed..")
        else {
          //cookies
          Auth.setAuth(true)
          Cookies.set("user",response.data.firstName,{ expires: 7 })
          //test
          console.log("Record : " + response.data)
          //redirect to student route
          history.push("/student");
        }
      });
    }
    else {
      alert("Username and password length should be more than 0")
    }

  };

  return (
    <div className="login_page">
      <Grid align="center">
        <MuiThemeProvider >
          <div>
            <AppBar
              title="Login"
            />
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <RaisedButton label="Login" primary={true} style={style} onClick={login} />
            <NavLink exact to="/signup"><RaisedButton label="SignUp" primary={true} style={style} /></NavLink>

          </div>
        </MuiThemeProvider>
      </Grid>

    </div>
  );

};

const style = {
  margin: 15,
};
export default Login;