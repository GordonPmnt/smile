import React from 'react';
import theme from './utils/theme';
import { Link } from "react-router-dom";


export default function MainPage() {
  const styles = {
    container: {
      display: 'flex',
      width : '100vw',
      height: '100vh',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      justifyItems: 'center',
      alignContent: 'center',
    },

    title: {
      textAlign: 'center',
      color: theme.colors.pink,
    },

    start: {
      display: 'flex',
      marginTop : '5%',
      marginLeft : '50%',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      fontSize: '16px',
    },

  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Party time !</h1>
      <Link 
        to="/GameRoom" 
        style={styles.start}
      >
        Start
      </Link>
    </div>
  );
}
