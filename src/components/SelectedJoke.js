import React from "react";

export default function SelectedJoke() {
    const styles = {
        jokeBox: {
            width: '100%',
            heigth: '10%',
            position: 'absolute',
            zIndex: '1',
            top: '1em',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
        },
        littleJokeBox: {
            width: '70%',
            backgroundColor: 'white',
        }
    }
    return (
        <div style={styles.jokeBox}>
            <div style={styles.littleJokeBox}>
                <p>Qu’est-ce qui court et qui se jette ?</p>
                <p>Une courgette</p>
            </div>
        </div>
    );
}