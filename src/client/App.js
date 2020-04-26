import React, { useState } from 'react';
import MainPage from './components/MainPage'
import GameRoom from './components/GameRoom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const [ player, setPlayer ] = useState('')

  const handlePlayerInput = event => {
    let { value } = event.target
    setPlayer(value)
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <MainPage {...props} handlePlayerInput={handlePlayerInput} />} />
        <Route path="/GameRoom" render={() => <GameRoom player={player} />}/>
      </Switch>
    </Router>
  );
}

export default App;
