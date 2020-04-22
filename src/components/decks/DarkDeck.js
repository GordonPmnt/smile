import React from "react";
import { colors } from '../styles/ThemeContext';


const DarkDeck = ({ getDarkJoke }) => {
    const styles = {
        card: {
            borderRadius: '5px',
            border: `${colors.red} 10px solid`,
            backgroundColor: colors.lightRed,
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
            opacity: '0.7',
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







