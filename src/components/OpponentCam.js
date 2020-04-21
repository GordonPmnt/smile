import React from "react";
import SelectedJoke from "./SelectedJoke";
import ScreenshotButton from './subComponents/ScreenshotButton';
import theme from './utils/theme';


export default function OpponentCam({ toggleActivity }) {
    const styles = {
        container: {
            height: '94vh',
            width: '70vw',
            margin: '0',
            display: 'flex',
            justifyContent: 'center',
        },
        OpponentInterface: {
            margin: '3vh',
            height: '100%',
            width: '100%',
            border: `solid ${theme.colors.yellow} 5px`, // This should come from selectedJoke
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        webcam: {
            height: '100%',
            width: '100%'
        }
    }
    const picture = require('../img/fakeGP.png')
    return (
        <div  style={styles.container}>
            <div style={styles.OpponentInterface}>
                <img src={picture} alt="fake webcam" style={styles.webcam}/>
                <SelectedJoke toggleActivity={toggleActivity} />
                <ScreenshotButton toggleActivity={toggleActivity} />
            </div>
        </div>
    );
}