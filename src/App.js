import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import MainPage from "./components/mainpage.component";
import HomePage from './components/homepage.component';
import AllEntries from './components/entries.component';
import Profile from './components/profile.component';


function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/home"}> Track Acess </Link>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/entries"}> Your entries </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/profile"}> Profile </Link>
              </li>
            </ul>     
            </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}> Login </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}> Sign up </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="centered">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route exact path="/home" component={HomePage} />
            <Route path="/entries" component={() => <AllEntries authorised ={localStorage.getItem('isLogged')}/> } />
            <Route path="/profile" component={ () => <Profile authorised ={localStorage.getItem('isLogged')}/> } />
            <Route path="/mainPage" component={ () => <MainPage authorised ={localStorage.getItem('isLogged')}/> } />
        </Switch>  
      </div> 
    </div>  
    </Router>
  );
}

export default App;