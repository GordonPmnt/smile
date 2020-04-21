import React from "react";
import ScreenShot from './subComponents/ScreenShot';

function Gallery() {
    const styles = {
        container: {
            display: 'flex',
            width: '100%',
            heigth: '25%',
            alignItems: 'center',
            flexDirection: 'column'
        },
    }

    return (
        <div style={styles.container}>
            <h2>MY GALLERY</h2>
            <ScreenShot/>
        </div>
    );
}

export default Gallery;