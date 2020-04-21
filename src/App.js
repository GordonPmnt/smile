import React from 'react';
import MainPage from './components/MainPage'
import GameRoom from './components/GameRoom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/GameRoom" component={GameRoom} />
      </Switch>
    </Router>
  );
}

export default App;
