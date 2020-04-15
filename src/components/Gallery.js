import React from "react";
import ScreenShot from './ScreenShot';

function Gallery() {
    const styles = {
    listBox: {
    width: '100%',
    paddingTop : '3px',
    backgroundColor: 'green',
    },
}
return (
    <div style={styles.listBox}>
        <p>Gallery</p>
        <ScreenShot/>
    </div>
    );
}

export default Gallery;