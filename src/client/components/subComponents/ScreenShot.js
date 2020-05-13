import React from "react";
//import littleScreenshots from './littleScreenshot';


const ScreenShot = ({ winnerCapture, looserCapture }) => {
    const styles = {
        container: {
            height: '25vh',
            width: '9vw',
            paddingTop : '6vh',
            paddingBottom: '8vh',
            paddingRight: '2vh',
            textAlign: 'right',
            marginRight: '-4vw'
        },
    }

    const looserStyles = {
        container: {
            height: 'auto',
            maxWidth: '9vw',
            zIndex: 1, 
            border: 'solid green 2px',   
            transform: 'rotate(-0.05turn)',  
        },
    }

    return (
        <div id="screenshot" style={styles.container}>
            {/*<LittleScreenshots winnerCapture={winnerCapture} style={{zIndex: 2}} />*/}
            <img src={looserCapture} alt="looser" style={looserStyles.container} />
        </div>
        );
}

export default ScreenShot;