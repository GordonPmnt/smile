import React, {Component} from "react";
import Deck from './Deck';
import axios from 'axios';


const styles = {
    container: {
        width: '100%',
        backgroundColor: 'red',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
}


 class DecksList extends Component {
     componentDidMount(){

        axios
      .get('/api/joke/1', {
          method: 'get',
          headers: { Authorization: 'FW6CstM9yETDGYTEqdL-R.4fNoGEUCRHW0SvHOGXo2YpK2j-4th5JY3pTT_qDtWX' }
      })
      .then(res => {
          console.log(res.data)
      });
}

    
    render(){
        return (
            <div style={styles.container}>
                <Deck/>
                <Deck/>
                <Deck/>
            </div>
        );
    }
}

export default DecksList;