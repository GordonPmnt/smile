import React from "react";
import NextButton from './subComponents/NextButton';
import { ThemeContext, colors } from "./styles/ThemeContext";


const SelectedJoke = ({ toggleActivity }) => {
    const styles = {
        container: {
            top: '5%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'white',
            border: `solid 5px`,
            borderRadius: '10px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            opacity: '0.6',
            width: '45em',
        },
        text: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
        },
        joke: {
            fontSize: '1.2em'
        },
        answer: {
            fontSize: '1.2em',
            color: colors.green,
        }
    }

    return (
        <ThemeContext.Consumer>
            {theme =>
                <div style={{...styles.container, ...theme.borderColor}}>
                    <div style={styles.text}>
                        <p style={styles.joke}>Qu’est-ce qui court et qui se jette ?</p>
                        <p style={styles.answer}>Une courgette</p>
                    </div>
                    <NextButton 
                        style={styles.button}
                        toggleActivity={toggleActivity}
                        daddy={theme.logo}
                    />
                </div>
            }
        </ThemeContext.Consumer>
    );
}

export default SelectedJoke;