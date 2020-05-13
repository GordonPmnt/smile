import React from "react";
import { StylesProvider } from "@material-ui/core";


const LastScreen = ({ winnerCapture, looserCapture }) => {
    const styles = {
        winnerCapture: {
            border : '5px solid green',
            height : '30vw',
            width : 'auto',
        },
        looserCapture: {
            border : '5px solid red',
            width : '100px',
            height : '100px',
            marginBottom : '400px',
            marginLeft : '-100px',
        }
    }
    return (
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
        );
}

export default LastScreen;