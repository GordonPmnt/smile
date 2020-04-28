import React from "react";
import SelectedJoke from "./SelectedJoke";
import ScreenshotButton from './subComponents/ScreenshotButton';
import { ThemeContext } from './styles/ThemeContext';
import Webcam from "react-webcam";


const OpponentCam = ({ handleEndOfturn, activeJoke }) => {
    const styles = {
        container: {
            margin: '5vh 5vh 5vh 5vh',
            height: '90vh',
            width: '60vw',
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
            width: '100%',
            margin: 'auto 0',
            borderRadius: '15px',
            border: 'solid 5px',
        },
    };  

    return (
        <ThemeContext.Consumer>
        {theme => 
            <div  style={{...styles.container}}>
                <Webcam style={{...styles.webcam, ...theme.borderColor}} />
                <div style={styles.OpponentInterface}>
                    {activeJoke.isActive &&
                        <SelectedJoke 
                            handleEndOfturn={handleEndOfturn}
                            activeJoke={activeJoke}
                        />
                    }
                        <ScreenshotButton 
                            handleEndOfturn={handleEndOfturn}
                            theme={theme}
                        />
                </div>
            </div>
        }
        </ThemeContext.Consumer>
    );
}

export default OpponentCam;