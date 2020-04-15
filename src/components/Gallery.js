import React from "react";

function Gallery() {
    const styles = {
    listBox: {
    width: '100%',
    paddingTop : '30px',
    backgroundColor: 'green',
    display: 'inline-block',
    textAlign: 'center',
    },
}
return (
    <div style={styles.listBox}>
        <p>Gallery</p>
    </div>
    );
}

export default Gallery;