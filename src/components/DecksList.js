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
            getRandomJoke, getDarkJoke, getChuckJoke, getSexJoke 
        } = this.props

        return (
            <div style={this.styles.container}>
                <h2 style={this.styles.label}>CHOOSE YOUR DADDY JOKER</h2>
                <div 
                    style={this.styles.decks}
                >
                    <RandomDeck 
                        getRandomJoke={getRandomJoke} />
                    <DarkDeck 
                        getDarkJoke={getDarkJoke} />
                    <ChuckDeck 
                        getChuckJoke={getChuckJoke} />
                    <SexDeck 
                        getSexJoke={getSexJoke} />
                </div>
            </div>
        );
    }
}

export default DecksList;
