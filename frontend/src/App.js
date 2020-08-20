import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom';
import HOME from './pages/home'
import User from './pages/user'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
  <Link to="/"> Home</Link>
  |
  <Link to="/user"> User</Link>
  |<Link to="/user/new"> User New</Link>
  <br/>
  <Switch>
    <Route path="/" exact> 
    <HOME/>
     </Route>
    <Route path="/user" >
      <User/>
        </Route>
  </Switch>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
