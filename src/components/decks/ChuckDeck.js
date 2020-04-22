import React from "react";
import theme from '../styles/theme';


const ChuckDeck = ({ getChuckJoke }) => {
    const styles = {
        card: {
            borderRadius: '5px',
            border: `${theme.colors.cyan} 10px solid`,
            backgroundColor: theme.colors.lightCyan,
            height: '8.5rem',
            width: '5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
        },
        label: {
            fontSize: '0.8rem',
            textAlign: 'center',
        },
        daddy: {
            width: '2.3em',
            marginBottom: '10px',
        }
    }
    const daddy = require('../../img/cop-transparent.png')

    return (
        <div style={styles.card} onClick={() => getChuckJoke && getChuckJoke()}>
            <p style={styles.label}>CHUCK NORRIS</p>
            <img 
                src={daddy} 
                alt="random joke daddy" 
                style={styles.daddy}
            />
        </div>
    );
}

export default ChuckDeck;







