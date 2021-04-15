import react from 'react'
import { Route, Switch } from 'react-router'
import Signup from './Signup'
import Login from './Login'
import MenuBar from './MenuBar'
const User=()=>{

    var name=""
    function getName(name1){
        name=name1;
    }

    return( 
        <>
            <Switch>
                <Route exact path="/" component={() => <Login name={getName} />}></Route>
                <Route exact path="/signup" component={Signup}></Route>
                <Route exact path="/student" component={()=><MenuBar name={name}/> }></Route>
                <Route exact path="/university" component={()=><MenuBar name={name}/> }></Route>
                <Route exact path="/join2" component={()=><MenuBar name={name}/> }></Route>
            </Switch>
        </>
    );
}
export default User;