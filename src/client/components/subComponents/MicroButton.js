import React from 'react';

const MicroButton = () => {
    const styles = {
        button: {
            boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.50)',
            position: 'absolute',
            marginLeft: '5%',
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
            <p style={styles.text}>MICRO</p>
        </div>
    )
}

export default MicroButton;