import React from "react";
import SelectedJoke from "./SelectedJoke";

export default function OpponentCam() {
    const styles = {
        opponentCamBox: {
            backgroundColor: 'green',
            height: '100vh',
            width: '70%',
            margin: '0px',
            position: 'relative',
            zIndex: '2',
        },

    }
    return (
        <div  style={styles.opponentCamBox}>
            <div>
                <SelectedJoke />
            </div>
            <img src="https://image.freepik.com/free-photo/young-bearded-crazy-man-laughing-looking-happy-positive-surprised-realizing-great-idea-pointing-lateral-copyspace-against-flat-color_1194-35140.jpg" display="block" width="100%" height="100%" />
        </div>
    );
}