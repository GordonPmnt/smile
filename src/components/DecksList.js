import React, {Component} from "react";
import Deck from './Deck';
import axios from 'axios';


 class DecksList extends Component {
    styles = {
        container: {
            width: '100%',
            height: '30%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
    }

    componentDidMount(){
        axios
        .get('/api/joke/1', {
            method: 'get',
            headers: { 
                Authorization: 'FW6CstM9yETDGYTEqdL-R.4fNoGEUCRHW0SvHOGXo2YpK2j-4th5JY3pTT_qDtWX' 
            }
        })
        .then(res => 
            console.log(res.data)
        )
        .catch(err => 
            console.log(err.message)
        )
    }
    
    render(){
        return (
            <div style={this.styles.container}>
                <Deck />
                <Deck />
                <Deck />
                <Deck />
            </div>
        );
    }
}

export default DecksList;