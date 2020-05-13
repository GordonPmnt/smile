import React from "react";


const ScreenShot = ({ winnerCapture, looserCapture }) => {
    const styles = {
        container: {
            width: '30vw',
            height: '20vh',
            paddingTop : '30px',
            display: 'inline-block',
            textAlign: 'center',
            flexDirection: 'row-reverse',
        },
    }
    const winnerStyles = {
        container: {
            width: '15%',
            zIndex: 1,
        }
    }
    const looserStyles = {
        container: {
            width: '100%',
            zIndex: 0,
        }
    }

    return (
        <div id="screenshot" style={styles.container}>
            <img src={winnerCapture} alt="winner" />
            <img src={looserCapture} alt="looser" />
        </div>
        );
}

export default ScreenShot;