import React from "react";

function Deck() {
    const styles = {
        card: {
            width: '15%',
            height: '15vh',
            backgroundColor: 'yellow',
            textAlign: 'center',
        },
    }

    return (
        <div style={styles.card}>
            <p>Deck</p>
        </div>
    );
}

export default Deck;