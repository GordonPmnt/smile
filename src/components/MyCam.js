import React from "react";
import Webcam from "react-webcam";
 
const MyCam = ({ mirrored }) => {
    return (
        <Webcam mirrored={mirrored} />
    )
};

export default MyCam;