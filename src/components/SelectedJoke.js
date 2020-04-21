import React from "react";
import NextButton from './subComponents/NextButton';

export default function SelectedJoke({ toggleActivity }) {
    const styles = {
        container: {
            top: '5%',
            width: '100%',
            heigth: '10%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
        },
        text: {
            backgroundColor: 'white',
            width: '70%',
            textAlign: 'center',
        },
        button: {
            position: 'relative'
        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.text}>
                <p>Qu’est-ce qui court et qui se jette ?</p>
                <p>Une courgette</p>
            </div>
            <NextButton 
                style={styles.button}
                toggleActivity={toggleActivity}
                deckLogo={require('../img/mexicano-transparent.png')} // Should be linked to Deck Choice
            />
        </div>
    );
}