import React from 'react';
import { colors } from './styles/ThemeContext';


const MainPage = ({ history, handlePlayerInput }) => {
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
    gentleman: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '8rem',
      opacity: '0.8',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      border: `solid 1px ${colors.pink}`,
      margin: '0 40%',
      padding: '0.5%',
    }
  }

  const handleSubmit = () => {
    history.push('/Gameroom');
  }

  const gentleman = require('../img/gentleman-transparent.png')

  return (
    <div style={styles.container}>
      <img src={gentleman} alt='gentleman' style={styles.gentleman} />
      <h1 style={styles.title}>DADLAB !</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="player">
          Joueur: 
          <input type="text" name="player" onChange={handlePlayerInput} />
        </label>
        <input type="submit" value="Jouer"/>
      </form>
    </div>
  );
}

export default MainPage;
