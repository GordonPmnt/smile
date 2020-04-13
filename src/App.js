import React from 'react';
import MainPage from './components/MainPage'
import GameRoom from './components/GameRoom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/GameRoom">
          <GameRoom />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
