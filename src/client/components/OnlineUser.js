import React from 'react';
import { colors } from './styles/ThemeContext';
import './OnlineUser.css'


const OnlineUser = ({ name, socket, socketId, myPeerConnection, setCallMade }) => {
    const { RTCSessionDescription } = window;

    async function callUser(socketId) {
        setCallMade(true)
        const offer = await myPeerConnection.createOffer();
        await myPeerConnection.setLocalDescription(new RTCSessionDescription(offer));
        socket.emit("call-user", {
          offer,
          to: socketId
        });
    }
    // Executed when modifiying tracks: eg, mute/unmute
    myPeerConnection.addEventListener("negotiationneeded", () => callUser(socketId))
    
    return (
        <li 
            onClick={() => callUser(socketId)} 
            style={{
                listStyleType: 'none',
                padding: '2px 10px 2px 10px',
                border: `2px solid ${colors.violet}`,
                borderRadius: '10px',
                cursor: 'pointer',
                margin: '10px',
                zIndex: 3,
            }}
        >
            Commencer à jouer avec: {name}
        </li>
    )
}

export default OnlineUser;