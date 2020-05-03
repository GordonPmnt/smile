import React from 'react';


const NextButton = ({ handleEndOfturn, daddy }) => {
    const styles = {
        button: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            right: '15px',
            bottom: '5px',
            cursor: 'pointer',
        },
        logo: {
            height: "2em",
            marginRight: '6px',
        },
        text: {
            margin: '5px 0 0 0',
        }
    }

    return (
        <div style={styles.button} onClick={() => handleEndOfturn()}>
            <img 
                src={daddy} 
                alt="Next Logo" 
                style={styles.logo} 
            />
            <p style={styles.text}>NEXT</p>
        </div>
    )
}

export default NextButton;