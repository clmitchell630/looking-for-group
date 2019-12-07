import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/about';
import Landing from './pages/landing';
import Match from './pages/match';
import Question from './pages/question';
import Register from './pages/register';
import Signup from './pages/signup';
import './App.css';
import Navbar from './components/Navbar/';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/about' component={About} />
            <Route exact path='/register' component ={Register} />
            <Route exact path='/matchform' component ={Question} />
            <Route exact path='/yourmatch' component ={Match} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
