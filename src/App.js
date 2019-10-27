import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import HomePage from './pages/Homepage'
import ShopPage from './pages/Shop';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/' component={HomePage} />
      </Switch>

    </div>
  );
}

export default App;
