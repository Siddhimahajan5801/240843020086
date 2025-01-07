import loggedSlice, {login} from './loggedSlice'
import {useDispatch, useSelector }from 'react-redux'
import Logout from './Logout'
function LoginForm () {
    const dispatch = useDispatch();   //updating the store
    const mystate = useSelector((state)=>state.logged) 
                    //fetching data from store
    const submitme = (e) => {
        e.preventDefault();
        
        dispatch(login())
        console.log("state modified")
    }

    return (
        <div>
            <p> Welcome </p>
           
            <form>
                UID : <input type="text" name="uid" /> <br/>
                Pwd : <input type="password" name="pwd" /> <br/>
                <input type="button" value="Login"
                onClick={(e)=> {submitme(e)}} />
            </form>
            
            {mystate.loggedIn.toString()} <br/>
            <div style={{display: mystate.loggedIn?"block":"none"}}>
                <Logout />
            </div>
            
        </div>
    )
}

export default LoginForm;