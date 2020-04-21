import React, {Component} from "react";
import Deck from './Deck';
import axios from 'axios';


 class DecksList extends Component {
    state = {
        joke:'',
        answer:'',
        category:'',
    }

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
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
        }
    }

    componentDidMount(){
        axios

        .get('/api/joke/random', {
            method: 'get',
            headers: { 
                Authorization: 'FW6CstM9yETDGYTEqdL-R.4fNoGEUCRHW0SvHOGXo2YpK2j-4th5JY3pTT_qDtWX' 
            }
        })

        .then(response => { console.log(response)
            const {joke} = response.data;
            this.setState( {joke : joke.question} );
            this.setState( {answer : joke.answer} );
            this.setState( {category : 'random'})
        })
    
        .catch(err => {
            console.log(err.message)
        })
    }
    
    render(){
        return (
            <div style={this.styles.container}>
                <h2 style={this.styles.label}>CHOOSE YOUR DADDY JOKER</h2>
                <div style={this.styles.decks}>
                    <button onClick={this.componentDidMount}>{this.state.joke}
                        <Deck />
                        <Deck />
                        <Deck />
                        <Deck />
                    </button>
                </div>
            </div>
        );
    }
}

export default DecksList;
