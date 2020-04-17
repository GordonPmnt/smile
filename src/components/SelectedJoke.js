import React from "react";
import NextButton from './subComponents/NextButton';

export default function SelectedJoke({ toggleActivity }) {
    const styles = {
        jokeBox: {
            width: '100%',
            heigth: '10%',
            position: 'absolute',
            zIndex: '1',
            top: '1em',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
        },
        littleJokeBox: {
            backgroundColor: 'white',
            width: '70%',
        }
    }
    return (
        <div style={styles.jokeBox}>
            <div style={styles.littleJokeBox}>
                <p>Qu’est-ce qui court et qui se jette ?</p>
                <p>Une courgette</p>
            </div>
            <NextButton 
                toggleActivity={toggleActivity}
                deckLogo={require('../img/mexicano-transparent.png')} // Should be linked to Deck Choice
            />
        </div>
    );
}