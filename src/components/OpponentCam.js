import React from "react";
import SelectedJoke from "./SelectedJoke";
import ScreenshotButton from './subComponents/ScreenshotButton';


export default function OpponentCam({ toggleActivity }) {
    const styles = {
        container: {
            height: '94vh',
            width: '70vw',
            margin: '0',
            display: 'flex',
            justifyContent: 'center'
        },
        webCam: {
            margin: '3vh',
            height: '100%',
        }

    }
    const picture = require('../img/fakecam.png')
    return (
        <div  style={styles.container}>
            <SelectedJoke toggleActivity={toggleActivity} />
            <img
                style={styles.webCam}
                src={picture}
                alt="fake webcam"
            />
            <ScreenshotButton toggleActivity={toggleActivity} />
        </div>
    );
}