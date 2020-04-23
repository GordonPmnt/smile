import React from "react";
import Webcam from "react-webcam";
import { ThemeContext } from './styles/ThemeContext';

 
const MyCam = ({ mirrored }) => {
    const styles = {
        cam: {
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%',
            borderRadius: '10px',
            border: 'solid 3px',
        }
    }
    
    return (
        <ThemeContext.Consumer>
        {theme =>
            <Webcam 
                style={{...styles.cam, ...theme.borderColor}}
                mirrored={mirrored}
            />
        }
        </ThemeContext.Consumer>
    )
};

export default MyCam;