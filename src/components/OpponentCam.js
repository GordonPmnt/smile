import React from "react";
import SelectedJoke from "./SelectedJoke";
import ScreenshotButton from './subComponents/ScreenshotButton';
import { ThemeContext } from './styles/ThemeContext'


const OpponentCam = ({ toggleActivity, activeJoke }) => {
    const styles = {
        container: {
            margin: '5vh 3vh 5vh 3vh',
            height: '90vh',
            width: '64vw',
            display: 'flex',
            justifyContent: 'center',
            border: `solid 5px`,
            borderRadius: '5px',
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
        },
    };
    const picture = require('../img/fakewebcamGP.png')

    return (
        <ThemeContext.Consumer>
        {theme => 
            <div  style={{...styles.container, ...theme.borderColor}}>
                <img src={picture} alt="fake webcam" style={styles.webcam}/>
                <div style={styles.OpponentInterface}>
                    {activeJoke.isActive &&
                        <SelectedJoke 
                            toggleActivity={toggleActivity}
                        />
                    }
                        <ScreenshotButton 
                            toggleActivity={toggleActivity}
                            theme={theme}
                        />
                </div>
            </div>
        }
        </ThemeContext.Consumer>
    );
}

export default OpponentCam;