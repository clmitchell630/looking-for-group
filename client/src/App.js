import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/about';
import Landing from './pages/landing';
import MatchPage from './pages/match';
import Questions from './pages/question';
import Register from './pages/register';
import Profile from './pages/profile';
import './App.css';
import { useAuth0 } from "./react-auth0-spa";
import Navbar from './components/Navbar/';

function App() {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

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
        <Route exact path='/register' component={Register} />
        <Route exact path='/matchform' component={Questions} />
        <Route path='/mymatch' component={MatchPage} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;

