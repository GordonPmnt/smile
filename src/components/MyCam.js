import React from "react";
import Webcam from "react-webcam";
 
const MyCam = ({ mirrored }) => {
    return (
        <Webcam mirrored={mirrored} 
        
        
        height={250}
        width={470}
        
        />

    )
};

export default MyCam;