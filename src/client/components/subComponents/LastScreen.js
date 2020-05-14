import React from "react";


const LastScreen = ({ winnerCapture, looserCapture, displayLastscreen, displaySelectedScreen, selectedjoke }) => {
    const styles = {
        looserCapture: {
            border : '5vh solid white',
            boxShadow: '6px 6px 6px black',
            height : '35vw',
            width : 'auto',
        },
        winnerCapture: {
            border : '5px solid green',
            height : '5vw',
            width : 'auto',
            marginBottom : '26vw',
            marginLeft : '-19vh',
        }
    }

    return (
        <>
            {(displayLastscreen || displaySelectedScreen) &&
                <div>
                    <p>{selectedjoke}</p>
                    <img 
                        style={styles.looserCapture}
                        src={looserCapture} alt="looser" 
                    />
                     <img
                        style={styles.winnerCapture}
                        src={winnerCapture} alt="winner"
                    />
                </div>
            }
        </>
        );
}

export default LastScreen;