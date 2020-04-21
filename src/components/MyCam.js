import React from "react";
import Webcam from "react-webcam";
 
const MyCam = ({ mirrored }) => {
    const styles = {
        container: {
            heigth: '40%'
        }
    }
    
    return (
        <Webcam 
            style={styles.container}
            mirrored={mirrored} 
            height={250}
            width={470}
        />
    )
};

export default MyCam;