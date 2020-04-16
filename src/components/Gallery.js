import React from "react";
import ScreenShot from './ScreenShot';

function Gallery() {
    const styles = {
        container: {
            width: '100%',
            backgroundColor: 'green',
        },
    }

    return (
        <div style={styles.container}>
            <p>Gallery</p>
            <ScreenShot/>
        </div>
    );
}

export default Gallery;