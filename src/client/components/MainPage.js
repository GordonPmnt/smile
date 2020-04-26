import React from 'react';
import { colors } from './styles/ThemeContext';
import socketIOClient from 'socket.io-client'


const MainPage = ({ history }) => {
  const styles = {
    container: {
      display: 'flex',
      width : '100vw',
      height: '100vh',
      flexDirection: 'column',
      justifyContent: 'center',
      fontFamily: "Righteous, cursive",
    },
    title: {
      fontSize: '4rem',
      textAlign: 'center',
      color: colors.pink,
    },
    start: {
      textAlign: 'center',
      textDecoration: 'none',
      border: `solid 1px ${colors.pink}`,
      margin: '0 40%',
      padding: '0.5%',
    },
    gentleman: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '8rem',
      opacity: '0.8',
    }
  }

  const handlesubmit = (event) => {
    event.preventDefault();
    history.push('/Gameroom')
  }

  const backend = "http://127.0.0.1:8080";
  const socket = socketIOClient(backend)

  const gentleman = require('../img/gentleman-transparent.png')

  return (
    <div style={styles.container}>
      <img src={gentleman} alt='gentleman' style={styles.gentleman} />
      <h1 style={styles.title}>DADLAB !</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="player">Joueur :<input type="text" name="player" /></label>
        <label htmlFor="room">Room :<input type="text" name="room" /></label>
        <input type="submit" value="Jouer"/>
      </form>
    </div>
  );
}

export default MainPage;
