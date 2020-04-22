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
            margin: '0'
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
        console.log(this.props)
        return (
            <div style={this.styles.container}>
                <h2 style={this.styles.label}>CHOOSE YOUR DADDY JOKER</h2>
                <div 
                    style={this.styles.decks}
                >
                    <RandomDeck 
                        getRandomJoke={this.props.getRandomJoke} />
                    <DarkDeck 
                        getDarkJoke={this.props.getDarkJoke} />
                    <ChuckDeck 
                        getChuckJoke={this.props.getChuckJoke} />
                    <SexDeck 
                        getSexJoke={this.props.getSexJoke} />
                </div>
            </div>
        );
    }
}

export default DecksList;
