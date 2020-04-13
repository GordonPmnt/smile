import React from "react";
import Webcam from "react-webcam";
 
const WebCam = ({ mirrored }) => {
    return (
        <Webcam mirrored={mirrored} />
    )
};

export default WebCam;