import React from "react";
import Deck from './Deck';

function DecksList() {
    const styles = {
        container: {
            width: '100%',
            backgroundColor: 'red',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
    }

    return (
        <div style={styles.container}>
            <Deck/>
            <Deck/>
            <Deck/>
            <Deck/>
        </div>
    );
}

export default DecksList;