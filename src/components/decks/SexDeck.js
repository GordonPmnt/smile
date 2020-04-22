import React from "react";
import theme from '../utils/theme';


const SexDeck = ({ getSexJoke }) => {
    const styles = {
        card: {
            borderRadius: '5px',
            border: `${theme.colors.pink} 10px solid`,
            backgroundColor: theme.colors.lightPink,
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







