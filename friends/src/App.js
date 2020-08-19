import React from 'react';
import {Switch, Link, Route} from 'react-router-dom'
import Login from './components/Login'
import FriendForm from './components/FriendForm'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/protected'>Friend Form</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendForm}/>
        <Route path="login" component={Login}/>
        <Route>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
