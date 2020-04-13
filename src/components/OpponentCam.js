import React from "react";
import SelectedJoke from "./SelectedJoke";

export default function OpponentCam() {
    const styles = {
        opponentCamBox: {
            height: '100vh',
            width: '70%',
            margin: '0px',
            position: 'relative',
            zIndex: '2',
        },

    }
    const picture = require('../img/fakecam.png')
    return (
        <div  style={styles.opponentCamBox}>
            <SelectedJoke />
            <img
                src={picture}
                alt="fake webcam"
            />
        </div>
    );
}