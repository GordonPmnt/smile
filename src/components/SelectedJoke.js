import React from "react";

export default function SelectedJoke() {
    const styles = {
        jokeBox: {
            width: '80%',
            heigth: '10%',
            position: 'absolute',
            zIndex: '1',
            backgroundColor: 'yellow',
            top: '1em',
            display: 'inline-block',
            textAlign: 'center',
            marginLeft: '80px',
        },
    }
    return (
        <div style={styles.jokeBox}>
            <p>Qu’est-ce qui court et qui se jette ?</p>
            <p>Une courgette</p>
        </div>
    );
}