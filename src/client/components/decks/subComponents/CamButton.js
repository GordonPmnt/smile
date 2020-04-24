import React from 'react';

const CamButton = () => {
    const styles = {
        button: {
            boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.50)',
            position: 'absolute',
            right: '-125px',
            marginTop: '16px',
            cursor: 'pointer',
        }
    }
    
    return (
        <div style={styles.button}>
            <p style={styles.text}>CAM</p>
        </div>
    )
}

export default CamButton;