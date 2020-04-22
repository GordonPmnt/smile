import React from "react";
import { colors } from '../styles/ThemeContext';


const SexDeck = ({ getSexJoke }) => {
    const styles = {
        card: {
            borderRadius: '5px',
            border: `${colors.pink} 10px solid`,
            backgroundColor: colors.lightPink,
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
    const daddy = require('../../img/sex-moustache-trans.png')

    return (
        <div style={styles.card} onClick={() => getSexJoke && getSexJoke()}>
            <p style={styles.label}>SEX JOKE</p>
            <img 
                src={daddy} 
                alt="random joke daddy" 
                style={styles.daddy}
            />
        </div>
    );
}

export default SexDeck;







