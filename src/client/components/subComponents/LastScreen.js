import React from "react";


const LastScreen = ({ winnerCapture, looserCapture }) => {
    return (
        <div>
            <img src={winnerCapture} alt="winner" />
            <img src={looserCapture} alt="looser" />
        </div>
        );
}

export default LastScreen;