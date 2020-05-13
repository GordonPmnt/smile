import React, { useState, useEffect } from "react";
import ScreenShot from './subComponents/ScreenShot';
import LastScreen from "./subComponents/LastScreen";


function Gallery({ winnerCapture, looserCapture, screenshots }) {
    const styles = {
        container: {
            display: 'flex',
            height: '25vh',
            width: '30vw',
            paddingRight: '6vw',
            alignItems: 'right',
            flexDirection: 'row-reverse',
            paddingTop: '3.6vh',
        },
        lastScreen: {
            position: 'absolute',
            top: '15vh',
            left: '10vw',
            zIndex: 11,
        },
        label: {
            fontWeight: 'normal'
        }
    }

    const [ gallery, setGallery ] = useState([])
    const [ lastScreen, setLastscreen ] = useState({})
    const [ displayLastscreen, setDisplayLastscreen ] = useState(false)

    useEffect(() => {
        if(screenshots.length > 0) {
            const pictures = {}
            const ids = new Set(screenshots.map(capture => capture.reqId))
            screenshots.forEach(
                capture => pictures[capture.reqId] = pictures[capture.reqId] 
                    ? {...pictures[capture.reqId], ...capture} 
                    : capture
            )
            const collection = Array.from(ids).map(id => pictures[id])
            setGallery(collection)
            setLastscreen(collection[collection.length - 1])
            setDisplayLastscreen(true)
        }
    }, [screenshots])

    console.log(gallery)

    return (
        <>
            <div style={styles.container}>
                {
                    gallery.map(picture => <ScreenShot 
                            winnerCapture={picture.winnerCapture} 
                            looserCapture={picture.looserCapture}
                        />
                    )
                }
            </div>
            {displayLastscreen &&
                <div 
                    style={styles.lastScreen}
                    onClick={() => setDisplayLastscreen(false)}
                >
                    <LastScreen
                        looserCapture={lastScreen && lastScreen.looserCapture}
                        winnerCapture={lastScreen && lastScreen.winnerCapture}
                        displayLastscreen={displayLastscreen}
                    />
                </div>
            }
        </>
    );
}

export default Gallery;