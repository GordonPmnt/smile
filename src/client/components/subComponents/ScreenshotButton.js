import React from 'react';


const ScreenshotButton = ({ handleEndOfturn, theme }) => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
        },
        button: {
            borderRadius: '100%',
            position: 'absolute',
            bottom: '10%',
            height: '5em',
            boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.50)',
            cursor: 'pointer',
            border: 'solid 3px',
        }
    }
    
    return (
        <div style={styles.container}>
            <img 
                src={require('../../img/cam-moustache.png')}
                alt="Screenshot button"
                onClick={() => handleEndOfturn()}
                style={{...styles.button, ...theme.borderColor}}
            />
        </div>
    )
}

export default ScreenshotButton;