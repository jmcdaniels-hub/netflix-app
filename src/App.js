import React, {useEffect} from 'react';
import HomeScreen from './screens/HomeScreen'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import {useDispatch, useSelector} from "react-redux"
import {login,logout, selectUser} from "./features/userSlice"


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        console.log(userAuth)
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else{
        dispatch(logout)
      }
    })
    return unsubscribe
    
  }, [])
  
  return (
    <div className="app">

      <Router>
        {!user ? (<LoginScreen/>) : (
        <Switch>
          <Route exact path="/">
            <HomeScreen/>
          </Route>
       </Switch>
        )}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
    </Router>

    </div>
  );
}

export default App;
