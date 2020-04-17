import React from 'react';


const ScreenshotButton = ({ toggleActivity }) => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
        },
        button: {
            borderRadius: '100%',
            position: 'absolute',
            bottom: '10%',
            height: '7em',
            boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.50)'
        }
    }
    return (
        <div style={styles.container}>
            <img 
                src={require('../../img/cam-moustache.png')}
                alt="Screenshot button"
                onClick={() => toggleActivity()}
                style={styles.button}
            />
        </div>
    )
}

export default ScreenshotButton;