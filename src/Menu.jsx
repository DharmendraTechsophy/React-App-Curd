import React from "react";
import {Route,Switch,NavLink} from "react-router-dom";
import './index.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Cookies from 'js-cookie'
import Logout from "./Logout"
const Menu = () =>{
    const userFirstName= Cookies.get("user")
    return(
        <>
            <div className="menu_style">
                <NavLink activeClassName="active_class" to="/student">Student</NavLink>
                <NavLink activeClassName="active_class" to="/university">University</NavLink>
                <NavLink activeClassName="active_class" to="/join2">Join</NavLink>
                <div className="profile_name">                    
                    <AccountCircleIcon/>
                    {userFirstName}&nbsp; 
                    <Logout/>
                </div>
                
            </div>
        </>
    );
}
export default Menu;
