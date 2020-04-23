import React from "react";
import SelectedJoke from "./SelectedJoke";
import ScreenshotButton from './subComponents/ScreenshotButton';
import CamButton from './subComponents/CamButton';
import theme from './utils/theme';


export default function OpponentCam({ toggleActivity }) {
    const styles = {
        container: {
            border: `solid ${theme.colors.yellow} 5px`, // This should come from selectedJoke
            margin: '5vh 3vh 5vh 3vh',
            height: '90vh',
            width: '64vw',
            display: 'flex',
            justifyContent: 'center',
        },
        OpponentInterface: {
            position: 'absolute',
            height: '96%',
            top: '4%',
            left: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
                <CamButton/>
            </div>
        </div>
    );
}