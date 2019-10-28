import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import HomePage from './pages/Homepage'
import ShopPage from './pages/Shop';
import Registration from './pages/Registration'
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signup' component={Registration} />
      </Switch>

    </div>
  );
}

export default App;
