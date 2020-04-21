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
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
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
                <button onClick={this.componentDidMount}>{this.state.joke}</button>
                    <Deck />
                    <Deck />
                    <Deck />
                    <Deck />
            </div>
        );
    }
}

export default DecksList;


/*
Object = {
    statut: 
    response: 
    error: 
    jokes: {
        question:
        answer:
        id: 
    }  
}

jokes.id{1}
jokes.id{2}
jokes.id{3}
jokes.id{4}*/