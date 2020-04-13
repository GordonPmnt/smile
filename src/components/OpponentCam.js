import React from "react";

export default function OpponentCam() {
    const styles = {
        opponentCamBox: {
            height: '100vh',
            width: '70%',
            margin: '0px',
        },
    }
    const picture = require('../img/fakecam.png')
    return (
        <div style={styles.opponentCamBox}>
            <img 
                src={picture}
                alt="fake webcam"
            />
        </div>
    );
}