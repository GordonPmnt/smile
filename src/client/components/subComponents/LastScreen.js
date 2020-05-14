import React from "react";


const LastScreen = ({ winnerCapture, looserCapture, displayLastscreen, displaySelectedScreen, selectedjoke, winner }) => {
    const styles = {
        screenshot: {
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '15px',
            width: 500,
            height: 450,
            boxShadow: '6px 6px 6px rgba(0, 0, 0, 0.12)',
        },
        looserCapture: {
            position: 'relative',
            top: '10px',
            left: '25px',
            borderRadius: '5px',
            width: 450,
            zIndex: 12,
            opacity: 0.9,
        },
        winnerCapture: {
            width : 100,
            zIndex: 14,
            borderRadius: '5px',
            position: 'relative',
            bottom: '85px',
            left: '45px',
            border: 'solid 3px rgba(255, 255, 255, 0.95)',
            opacity: 0.9,
        },
        joke: {
            textAlign: 'center',
            width: 400,
            fontSize: '1.1em',
            position: 'relative',
            top: '115px',
            left: '115px',
            margin: '0 0 0 -70px',
            zIndex: 15,
            color: 'white',
            transform: 'rotate(0.05turn)',
        },
        winner: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: 400,
            fontSize: '1.2em',
            position: 'relative',
            top: '25px',
            left: '115px',
            margin: '0 0 -35px -70px',
            zIndex: 15,
            color: '#DA4CB0',
        },
        media: {
            width: '30px',
            margin: '10px',
        }
    }

    const facebook = require('../../img/fb_icon_325x325.png')
    const instagram = require('../../img/langfr-220px-Instagram_logo_2016.svg.webp')

    return (
        <>
            {(displayLastscreen || displaySelectedScreen) &&
                <div style={styles.screenshot}>
                    <div>
                        <div style={styles.winner}>
                            <p style={{ margin: '0' }}>{winner} a gagné !</p>
                            <img style={styles.media} src={facebook} alt="fb" />
                            <img style={styles.media} src={instagram} alt="fb" />
                        </div>
                        <p style={styles.joke}>{selectedjoke}</p>
                        <img 
                            style={styles.looserCapture}
                            src={looserCapture} alt="looser" 
                        />
                        <img
                            style={styles.winnerCapture}
                            src={winnerCapture} alt="winner"
                        />
                    </div>
                </div>
            }
        </>
        );
}

export default LastScreen;