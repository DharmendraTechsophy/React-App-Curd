import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import react,{useState} from 'react';
import Axios from 'axios';
import  {NavLink,useHistory} from "react-router-dom"

const Login=(props)=>{

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
 
   function validateForm() {
     return username.length > 0 && password.length > 0;
   }

   const history = useHistory();
 
   const login=()=>{
     Axios.post("http://localhost:9000/user/search",{
       firstName:"",
       lastName:"",
       userName:username,
       email:"",
       password:password,
       createdDate:"2021-04-14"
     }).then((response)=>{
        if(response.data == null)
          alert("Login Failed..")
        else
        {
          console.log("Record : "+response.data)
          props.name(response.data.firstName)
          history.push("/student");
        }
     });
   };


    return (
        <div>
          <MuiThemeProvider>
            <div>
            <AppBar
               title="Login"
             />
             <TextField
               hintText="Enter your Username"
               floatingLabelText="Username"
               onChange={(e) => setUsername(e.target.value)}   
               />
             <br/>
               <TextField
                 type="password"
                 hintText="Enter your Password"
                 floatingLabelText="Password"
                 onChange={(e) => setPassword(e.target.value)}
                 />
               <br/>
              
                  <RaisedButton label="Login" primary={true} style={style} onClick={login}/>
                  <NavLink exact to="/signup"><RaisedButton label="SignUp" primary={true} style={style}/></NavLink>
              
           </div>
           </MuiThemeProvider>
        </div>
    );

};

const style = {
    margin: 15,
};
export default Login;