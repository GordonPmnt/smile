import React from "react";


const LittleScreenShot = ({winnerCapture}) => {
    const styles = {
        container: {
            position: 'absolute',
            height: '2vh',
            textAlign: 'right',
        },
    }

    const winnerStyles = {
        container: {
            height: '2vh',
            position: 'absolute',
            borderColor: 'green',
            borderWidth: '2px',
        }
    }

    return (
        <div style={styles.container}>
            <img src={winnerCapture} alt="winner" style={winnerStyles.container} />
        </div>
    )
}

export default littleScreenShot;