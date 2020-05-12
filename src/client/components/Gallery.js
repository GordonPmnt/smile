import React from "react";
import ScreenShot from './subComponents/ScreenShot';

function Gallery({ winnerCapture, looserCapture }) {
    const styles = {
        container: {
            display: 'flex',
            height: '25%',
            width: 'auto',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: 'green',
        },
        label: {
            fontWeight: 'normal'
        }
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.label}>Gallery</h2>
            <ScreenShot 
                looserCapture={looserCapture}
                winnerCapture={winnerCapture}
            />
        </div>
    );
}

export default Gallery;