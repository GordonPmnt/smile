import React from 'react';
 
export default function MainPage() {
  const styles = {
    container: {
      backgroundColor: 'yellow',
      width : '100%',
      height: '100vh'
    },

    start: {
      marginTop : '25%',
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
    <button style={styles.start}>start</button>
  </div>
  );
}
