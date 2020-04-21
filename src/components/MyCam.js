import React from "react";
import Webcam from "react-webcam";
 
const MyCam = ({ mirrored }) => {
    const styles = {
        cam: {
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%',
            borderRadius: '10px',
        }
    }
    
    return (
        <Webcam 
            style={styles.cam}
            mirrored={mirrored}
        />
    )
};

export default MyCam;