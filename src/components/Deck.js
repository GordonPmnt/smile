import React from "react";

function Deck() {
    const styles = {
    listBox: {
        width: '15%',
        height: '15vh',
        backgroundColor: 'yellow',
        textAlign: 'center',
    },
}
return (
    <div style={styles.listBox}>
        <p>Deck</p>
    </div>
    );
}

export default Deck;