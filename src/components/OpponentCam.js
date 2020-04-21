import React from "react";
import SelectedJoke from "./SelectedJoke";
import ScreenshotButton from './subComponents/ScreenshotButton';


export default function OpponentCam({ toggleActivity }) {
    const styles = {
        opponentCamBox: {
            height: '100vh',
            width: '70vw',
            margin: '0px',
            position: 'relative',
            zIndex: '2',
        },
        WebCam: {
            height: '100%',
        }

    }
    const picture = require('../img/fakecam.png')
    return (
        <div  style={styles.opponentCamBox}>
            <SelectedJoke toggleActivity={toggleActivity} />
            <img
                style={styles.WebCam}
                src={picture}
                alt="fake webcam"
            />
            <ScreenshotButton toggleActivity={toggleActivity} />
        </div>
    );
}