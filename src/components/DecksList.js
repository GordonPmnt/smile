import React from "react";

function DecksList() {
    const styles = {
    listBox: {
    width: '100%',
    paddingTop : '30px',
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

export default DecksList;