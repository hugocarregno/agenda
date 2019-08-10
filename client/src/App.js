import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import Contacts from './components/Contacts';
import CreateContact from './components/CreateContact';

function App(){
  return(
    <Router>
      <Navigation/>
        <div className="container p-4">
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={CreateUser} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/newcontact" component={CreateContact} />
        </div>
    </Router>
  );
}

export default App;
