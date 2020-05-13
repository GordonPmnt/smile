import React from "react";
import littleScreenshots from './littleScreenshot';


const ScreenShot = ({ winnerCapture, looserCapture }) => {
    const styles = {
        container: {
            position: 'absolute',
            height: '15vh',
            paddingTop : '2vh',
            paddingBottom: '2vh',
            textAlign: 'center',
            flexDirection: 'row-reverse',
        },
    }

    const looserStyles = {
        container: {
            height: '10vh',
            zIndex: 1,
        }
    }

    return (
        <div id="screenshot" style={styles.container}>
            <img src={looserCapture} alt="looser" sytle={looserStyles} />
            <littleScreenshots winnerCapture={winnerCapture} style={{zIndex: 2}} />
        </div>
        );
}

export default ScreenShot;