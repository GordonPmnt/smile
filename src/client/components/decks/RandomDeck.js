import React from "react";
import { colors } from '../styles/ThemeContext';


const RandomDeck = ({ getRandomJoke }) => {
    const styles = {
        card: {
            borderRadius: '5px',
            border: `${colors.yellow} 10px solid`,
            backgroundColor: colors.lightYellow,
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
            opacity: '0.7',
        }
    }
    const daddy = require('../../img/mexicano-transparent.png')

    return (
        <div style={styles.card} onClick={() => getRandomJoke && getRandomJoke()}>
            <p style={styles.label}>DEVINE?</p>
            <img 
                src={daddy} 
                alt="random joke daddy" 
                style={styles.daddy}
            />
        </div>
    );
}

export default RandomDeck;







