import React from "react";
import RandomDeck from './decks/RandomDeck';
import DarkDeck from './decks/DarkDeck';
import ChuckDeck from './decks/ChuckDeck';
import SexDeck from './decks/SexDeck';
import './DeckList.css'


 const DecksList = ({ getRandomJoke, getDarkJoke, getChuckJoke, getSexJoke, activeJoke, userIsActive, callMade}) => {
    const styles = {
        container: {
            width: '100%',
            height: '25%',
            margin: '0',
        },
        label: {
            textAlign: 'center',
            marginTop: '5%',
            fontWeight: 'normal',
        },
        decks: {
            display: 'flex',
            justifyContent: 'space-evenly',
        },
    }
    
    return (
        <div style={styles.container}>
            <h2 style={styles.label} className={(userIsActive && !activeJoke.isActive && callMade) && "shake"}>
                {
                    !userIsActive 
                        ? "NE RIS PAS!" 
                        : activeJoke.isActive 
                            ? "LIS LA JOKE A L'AUTRE JOUEUR..." 
                            : callMade ? "CHOISIS UNE JOKE DE PAPA" : "ATTENTE D'UN AUTRE JOUEUR"
                }
            </h2>
            <div 
                style={userIsActive 
                    ? callMade ? styles.decks : {...styles.decks, filter: 'grayscale(100%)'}
                    : {...styles.decks, filter: 'grayscale(100%)'}
                }
            >
                <RandomDeck 
                    getRandomJoke={!activeJoke.isActive && userIsActive 
                        ? getRandomJoke 
                        : undefined
                    } 
                />
                <DarkDeck 
                    getDarkJoke={!activeJoke.isActive && userIsActive 
                        ? getDarkJoke 
                        : undefined
                    } 
                />
                <ChuckDeck 
                    getChuckJoke={!activeJoke.isActive && userIsActive 
                        ? getChuckJoke 
                        : undefined
                    } 
                />
                <SexDeck 
                    getSexJoke={!activeJoke.isActive && userIsActive 
                        ? getSexJoke 
                        : undefined
                    } 
                />
            </div>
        </div>
    );
}

export default DecksList;
