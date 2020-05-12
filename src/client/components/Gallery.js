import React from "react";
import ScreenShot from './subComponents/ScreenShot';

function Gallery({winnerCaptureImg, looserCaptureImg}) {
    const styles = {
        container: {
            display: 'flex',
            height: '25%',
            width: 'auto',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: 'green',
        },
        label: {
            fontWeight: 'normal'
        }
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.label}></h2>
            <ScreenShot 
                looserCaptureImg={looserCaptureImg}
                winnerCaptureImg={winnerCaptureImg}
            />
        </div>
    );
}

export default Gallery;