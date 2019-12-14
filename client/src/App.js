import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/about';
import Landing from './pages/landing';
import MatchPage from './pages/match';
import Question from './pages/question';
import Register from './pages/register';
import './App.css';
import { useAuth0 } from "./react-auth0-spa";
import Navbar from './components/Navbar/';

function App() {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
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
        <Route exact path='/matchform' component={Question} />
        <Route exact path='/mymatch' component={MatchPage} />
      </Switch>
    </Router>
  );
}

export default App;

