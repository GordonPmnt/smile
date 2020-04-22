import React from "react";
import theme from '../styles/theme';


const DarkDeck = ({ getDarkJoke }) => {
    const styles = {
        card: {
            borderRadius: '5px',
            border: `${theme.colors.red} 10px solid`,
            backgroundColor: theme.colors.lightRed,
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
            width: '1.8em',
            marginBottom: '10px',
        }
    }
    const daddy = require('../../img/evil-transparent.png')

    return (
        <div style={styles.card} onClick={() => getDarkJoke && getDarkJoke()}>
            <p style={styles.label}>DARK HUMOR</p>
            <img 
                src={daddy} 
                alt="random joke daddy" 
                style={styles.daddy}
            />
        </div>
    );
}

export default DarkDeck;







