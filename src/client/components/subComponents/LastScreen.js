import React from "react";


const LastScreen = ({ winnerCapture, looserCapture, displayLastscreen }) => {
    const styles = {
        winnerCapture: {
            border : '5px solid green',
            height : '35vw',
            width : 'auto',
        },
        looserCapture: {
            border : '5px solid red',
            height : '5vw',
            width : 'auto',
            marginBottom : '29.5vw',
            marginLeft : '-12vh',
        }
    }

    console.log(displayLastscreen)

    return (
        <>
            {displayLastscreen &&
                <div>
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