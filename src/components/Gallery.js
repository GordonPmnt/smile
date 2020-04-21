import React from "react";
import ScreenShot from './ScreenShot';

function Gallery() {
    const styles = {
        container: {
            width: '100%',
            heigth: '25%',
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