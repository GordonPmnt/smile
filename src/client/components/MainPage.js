import React from 'react';
import { colors } from './styles/ThemeContext';


const MainPage = ({ history, handlePlayerInput, player }) => {
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
    subTitle: {
      fontSize: '2rem',
      textAlign: 'center',
      color: colors.pink,
      fontStyle: 'italic',
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
          <input 
            type="text" 
            name="player" 
            onChange={handlePlayerInput}
            required
          />
        </label>
        <input type="submit" value="Jouer"/>
      </form>
      <h2 style={styles.subTitle}>Vous trouvez ça drôle ?</h2>
    </div>
  );
}

export default MainPage;
