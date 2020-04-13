import React from "react";

export default function OpponentCam() {
    const styles = {
        opponentCamBox: {
            backgroundColor: 'green',
            height: '100vh',
            width: '70%',
            margin: '0px',
        },
    }
    return (
        <img src="https://image.freepik.com/free-photo/young-bearded-crazy-man-laughing-looking-happy-positive-surprised-realizing-great-idea-pointing-lateral-copyspace-against-flat-color_1194-35140.jpg" style={styles.opponentCamBox} />
    );
}