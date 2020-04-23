import React from 'react';
import { colors } from './styles/ThemeContext';
import { Link } from "react-router-dom";


const MainPage = () => {
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

  const gentleman = require('../img/gentleman-transparent.png')

  return (
    <div style={styles.container}>
      <img src={gentleman} alt='gentleman' style={styles.gentleman} />
      <h1 style={styles.title}>DADLAB !</h1>
      <Link style={styles.start} to="/GameRoom">
        Generate room
      </Link>
    </div>
  );
}

export default MainPage;
