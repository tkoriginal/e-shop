import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import HomePage from './pages/Homepage'

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/shop/hats' component={HatsPage} />
        <Route exact path='/' component={HomePage} />
      </Switch>

    </div>
  );
}

export default App;
