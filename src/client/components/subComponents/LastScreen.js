import React from "react";


const LastScreen = ({ winnerCapture, looserCapture, displayLastscreen, displaySelectedScreen, selectedjoke }) => {
    const styles = {
        winnerCapture: {
            border : '75px solid white',
            boxShadow: '6px 6px 6px black',
            height : '35vw',
            width : 'auto',
        },
        looserCapture: {
            border : '5px solid green',
            height : '5vw',
            width : 'auto',
            marginBottom : '29.5vw',
            marginLeft : '-12vh',
        }
    }

    return (
        <>
            {(displayLastscreen || displaySelectedScreen) &&
                <div>
                    <p>{selectedjoke}</p>
                    <img
                        style={styles.winnerCapture}
                        src={winnerCapture} alt="winner"
                    />
                    <img 
                        style={styles.looserCapture}
                        src={looserCapture} alt="looser" 
                    />
                </div>
            }
        </>
        );
}

export default LastScreen;