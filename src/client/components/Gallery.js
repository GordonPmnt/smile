import React, { useState, useEffect } from "react";
import ScreenShot from './subComponents/ScreenShot';


function Gallery({ winnerCapture, looserCapture, screenshots }) {
    const styles = {
        container: {
            display: 'flex',
            height: '25%',
            width: 'auto',
            alignItems: 'center',
            flexDirection: 'column',
        },
        label: {
            fontWeight: 'normal'
        }
    }

    const [ gallery, setGallery ] = useState([])
    useEffect(() => {
        const pictures = {}
        const ids = new Set(screenshots.map(capture => capture.reqId))
        screenshots.forEach(
            capture => pictures[capture.reqId] = pictures[capture.reqId] 
                ? {...pictures[capture.reqId], ...capture} 
                : capture
        )
        const collection = Array.from(ids).map(id => pictures[id])
        setGallery(collection)
    }, [screenshots])

    return (
        <div style={styles.container}>
            {
                gallery.map(picture => <ScreenShot 
                    winnerCapture={picture.winnerCapture} 
                    looserCapture={picture.looserCapture}
                    />
                )
            }
        </div>
    );
}

export default Gallery;