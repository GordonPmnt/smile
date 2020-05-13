import React from "react";


const littleScreenShot = ({winnerCapture}) => {
    const styles = {
        container: {
            position: 'absolute',
            height: '5vh',
            textAlign: 'right',
            flexDirection: 'row-reverse',
        },
    }

    const winnerStyles = {
        container: {
            height: '3vh',
            position: 'absolute',
        }
    }

    return (
        <div style={styles.container}>
            <img src={winnerCapture} alt="winner" style={winnerStyles.container} />
        </div>
    )
}

export default littleScreenShot;