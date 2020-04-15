import React from "react";
import Deck from './Deck';

function DecksList() {
    const styles = {
    listBox: {
    width: '100%',
    paddingTop : '3px',
    backgroundColor: 'red',
    display: 'inline-block',
    },
}
return (
    <div style={styles.listBox}>
        <p>Decks List</p>
        <Deck/>
    </div>
    );
}

export default DecksList;