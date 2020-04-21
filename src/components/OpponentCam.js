import React from "react";
import SelectedJoke from "./SelectedJoke";
import ScreenshotButton from './subComponents/ScreenshotButton';
import theme from './utils/theme';


export default function OpponentCam({ toggleActivity }) {
    const styles = {
        container: {
            border: `solid ${theme.colors.yellow} 5px`, // This should come from selectedJoke
            margin: '3vh',
            height: '94vh',
            width: '64vw',
            display: 'flex',
            justifyContent: 'center',
        },
        OpponentInterface: {
            position: 'absolute',
            height: '97%',
            top: '3%',
            display: 'flex',
            flexDirection: 'column',
        },
        webcam: {
            height: '100%',
            width: '100%',
        }
    }
    const picture = require('../img/fakewebcamGP.png')

    return (
        <div  style={styles.container}>
            <img src={picture} alt="fake webcam" style={styles.webcam}/>
            <div style={styles.OpponentInterface}>
                <SelectedJoke toggleActivity={toggleActivity} />
                <ScreenshotButton toggleActivity={toggleActivity} />
            </div>
        </div>
    );
}