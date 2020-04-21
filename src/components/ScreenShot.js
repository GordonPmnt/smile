import React from "react";

function ScreenShot() {
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
            <p>ScreenShot</p>
        </div>
        );
}

export default ScreenShot;