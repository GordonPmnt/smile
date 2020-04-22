import React, {Component} from "react";
import RandomDeck from './decks/RandomDeck';
import DarkDeck from './decks/DarkDeck';
import ChuckDeck from './decks/ChuckDeck';
import SexDeck from './decks/SexDeck';


 class DecksList extends Component {
    styles = {
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
    
    render() {
        const { 
            getRandomJoke, 
            getDarkJoke, 
            getChuckJoke, 
            getSexJoke, 
            activeJoke, 
            userIsActive,
        } = this.props

        return (
            <div style={this.styles.container}>
                <h2 style={this.styles.label}>CHOOSE YOUR DADDY JOKER</h2>
                <div 
                    style={userIsActive 
                        ? this.styles.decks 
                        : {...this.styles.decks, opacity: '0.4'}
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
}

export default DecksList;
