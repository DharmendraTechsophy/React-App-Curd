import React from "react";
import {Route,Switch,NavLink} from "react-router-dom";
import './index.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FaceIcon from '@material-ui/icons/Face';
const Menu = (props) =>{
    console.log("menu : "+props.name)
    return(
        <>
            <div className="menu_style">
                <NavLink activeClassName="active_class" to="/student">Student</NavLink>
                <NavLink activeClassName="active_class" to="/university">University</NavLink>
                <NavLink activeClassName="active_class" to="/join2">Join</NavLink>
                <div className="profile_name">                    
                    <AccountCircleIcon/>
                    {props.name} &nbsp;
                    {<a style={{color:'crimson',background:"#e3d646"}} href="http://localhost:3000/">Logout</a>}
                </div>
                
            </div>
        </>
    );
}
export default Menu;
