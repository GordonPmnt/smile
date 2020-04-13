import React from 'react';
 
export default function MainPage() {
  const styles = {
    container: {
      backgroundColor: 'yellow',
      width : '100%',
      height: '100vh'
    },

    title: {
      color: 'red',
      marginLeft: '40%',
      paddingTop: '10%',
      fontSize: '80px'
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
      fontSize: '16px'
    },

  }

  return (
  <div style={styles.container}>
    <h1 style={styles.title}>Party time !</h1>
    <button style={styles.start}>start</button>
  </div>
  );
}
