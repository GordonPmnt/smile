import React from 'react';
import { Link } from "react-router-dom";


export default function MainPage() {
  const styles = {
    container: {
      backgroundColor: 'yellow',
      width : '100%',
      height: '100vh',
    },

    title: {
      color: 'red',
      marginLeft: '40%',
      fontSize: '80px',
    },

    start: {
      marginTop : '5%',
      marginLeft : '50%',
      backgroundColor: '#008CBA',
      border: 'none',
      color: 'white',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      fontSize: '16px',
    },

  }

  return (
  <div style={styles.container}>
    <h1 style={styles.title}>Party time !</h1>
    <Link to="/GameRoom" style={styles.start}>start</Link>
  </div>
  );
}
