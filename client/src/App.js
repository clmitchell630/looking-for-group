import React from 'react';
import './App.css';
import Navbar from './components/Navbar/';
import Signup from "./pages/signup"
import GoogleSignIn from './components/Google Sign In';
import Landing from './pages/landing';

function App() {
  return (
    <GoogleSignIn />
  );
}

export default App;

