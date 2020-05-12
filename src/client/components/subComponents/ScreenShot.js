import React from "react";


const ScreenShot = ({ winnerCapture, looserCapture }) => {
    const styles = {
        container: {
            width: '30%',
            paddingTop : '30px',
            display: 'inline-block',
            textAlign: 'center',
        },
    }

    return (
        <div style={styles.container}>
            <img src={`data:image/jpeg;base64,${winnerCapture}`} alt="winner" />
            <img src={looserCapture} alt="looser" />
        </div>
        );
}

export default ScreenShot;