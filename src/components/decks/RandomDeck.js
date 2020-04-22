import React from "react";
import theme from '../utils/theme';


const RandomDeck = ({ getRandomJoke }) => {
    const styles = {
        card: {
            borderRadius: '5px',
            border: `${theme.colors.yellow} 10px solid`,
            backgroundColor: theme.colors.lightYellow,
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
    const daddy = require('../../img/mexicano-transparent.png')

    return (
        <div style={styles.card} onClick={() => getRandomJoke && getRandomJoke()}>
            <p style={styles.label}>RANDOM JOKE</p>
            <img 
                src={daddy} 
                alt="random joke daddy" 
                style={styles.daddy}
            />
        </div>
    );
}

export default RandomDeck;







