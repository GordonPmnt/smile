import React, { useState, useEffect } from "react";
import ScreenShot from './subComponents/ScreenShot';
import LastScreen from "./subComponents/LastScreen";


function Gallery({ screenshots }) {
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
            left: '30vw',
            zIndex: 11,
        },
        label: {
            fontWeight: 'normal'
        }
    }

    const [ gallery, setGallery ] = useState([])
    const [ lastScreen, setLastscreen ] = useState({})
    const [ displayLastscreen, setDisplayLastscreen ] = useState(false)
    const [ displaySelectedScreen, setDisplaySelectedScreen ] = useState(false)
    const [ selectedScreen, setSelectedScreen ] = useState({})

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

    const showScreenshot = picture => {
        console.log(picture)
        setDisplaySelectedScreen(true)
        setSelectedScreen(picture)
    }


    return (
        <>
            <div style={styles.container}>
                {
                    gallery.map(picture => <ScreenShot
                            key={picture.reqId}
                            winnerCapture={picture.winnerCapture} 
                            looserCapture={picture.looserCapture}
                            showScreenshot={showScreenshot}
                            picture={picture}
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
                        selectedjoke={lastScreen && lastScreen.selectedjoke}
                        winner={lastScreen && lastScreen.winner}
                    />
                </div>
            }
            {displaySelectedScreen &&
                <div 
                    style={styles.lastScreen}
                    onClick={() => setDisplaySelectedScreen(false)}
                >
                    <LastScreen
                        looserCapture={selectedScreen && selectedScreen.looserCapture}
                        winnerCapture={selectedScreen && selectedScreen.winnerCapture}
                        selectedjoke={selectedScreen && selectedScreen.selectedjoke}
                        winner={selectedScreen && selectedScreen.winner}
                        displaySelectedScreen={displaySelectedScreen}
                    />
                </div>
            }
        </>
    );
}

export default Gallery;