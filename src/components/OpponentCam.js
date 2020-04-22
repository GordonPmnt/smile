import React from "react";
import SelectedJoke from "./SelectedJoke";
import ScreenshotButton from './subComponents/ScreenshotButton';
import { ThemeContext } from './styles/ThemeContext'


const OpponentCam = ({ toggleActivity }) => {
    const styles = {
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
        },
    };
    const picture = require('../img/fakewebcamGP.png')

    return (
        <ThemeContext.Consumer>
        {theme => 
            <div  style={{...theme.border}}>
                <img src={picture} alt="fake webcam" style={styles.webcam}/>
                <div style={styles.OpponentInterface}>
                    <SelectedJoke 
                        toggleActivity={toggleActivity} 
                    />
                    <ScreenshotButton 
                        toggleActivity={toggleActivity} 
                    />
                </div>
            </div>
        }
        </ThemeContext.Consumer>
    );
}

export default OpponentCam;