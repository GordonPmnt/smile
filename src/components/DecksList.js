import React from "react";

export default function DecksList() {
    const styles = {
        listBox: {
            width: '100%',
            backgroundColor: 'red',
            display: 'inline-block',
            textAlign: 'center',
        },
    }
    return (
        <div style={styles.listBox}>
            <p>Decks List</p>
        </div>
    );
}