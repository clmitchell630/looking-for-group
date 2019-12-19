import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/about';
import Landing from './pages/landing';
import MatchPage from './pages/match';
import Questions from './pages/question';
import Profile from './pages/profile';
import './App.css';
import { useAuth0 } from "./react-auth0-spa";
import Navbar from './components/Navbar/';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div className="loadMe">Loading...</div>;
  }
  return (
    <Router>
      <div className="app">
        <Navbar />
      </div>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/about' component={About} />
        <PrivateRoute exact path='/matchform' component={Questions} />
        <PrivateRoute path='/mymatch' component={MatchPage} />
        <PrivateRoute path='/profile' component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;

