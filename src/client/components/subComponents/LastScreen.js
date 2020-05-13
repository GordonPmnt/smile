import React from "react";
import { StylesProvider } from "@material-ui/core";


const LastScreen = ({ winnerCapture, looserCapture }) => {
    const styles = {
        winnerCapture: {
            border : '5px solid green',
        },
        looserCapture: {
            border : '5px solid red',
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