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
          headers: { Authorization: 'wNCRy1cy4Uu.sPBmUEFcY5g991jBK7TD-OzSO.83-iar0fDBIYBKG6qFe-N.wH2W' }
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