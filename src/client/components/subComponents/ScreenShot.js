import React from "react";


const ScreenShot = ({ winnerCapture, looserCapture }) => {
    const styles = {
        container: {
            position: 'absolute',
            height: '80%',
            paddingTop : '2vh',
            textAlign: 'center',
            flexDirection: 'row-reverse',
        },
    }

    const looserStyles = {
        container: {
            height: '90%',
            zIndex: 0,
        }
    }

    const winnerStyles = {
        container: {
            height: '10%',
            zIndex: 1,
        }
    }

    return (
        <div id="screenshot" style={styles.container}>
            {/*<div style={{backgroundImage: looserCapture, width: '20vw' }} >
                <div style={{backgroundImage: winnerCapture, width: '7vw'}} />
            </div>*/}

            <img src={winnerCapture} alt="winner" style={winnerStyles} />
            <img src={looserCapture} alt="looser" sytle={looserStyles} />
        </div>
        );
}

export default ScreenShot;