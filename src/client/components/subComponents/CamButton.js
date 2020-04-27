import React from 'react';

const CamButton = () => {
    const styles = {
        button: {
            backgroundColor : 'white',
            boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.50)',
            position: 'absolute',
            marginLeft: '16%',
            marginTop: '-4%',
            cursor: 'pointer',
            height: '3em',
            width: '3em',
            borderRadius: '100%',
        },
        text: {
            display: 'flex',
            justifyContent: 'center',
        }
    }
    
    return (
        <div style={styles.button}>
            <p style={styles.text}>CAM</p>
        </div>
    )
}

export default CamButton;