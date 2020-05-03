import React from 'react';
import { colors } from './styles/ThemeContext';
import './OnlineUser.css'


const OnlineUser = ({ name, socket, socketId, myPeerConnection }) => {
    const { RTCSessionDescription } = window;

    async function callUser(socketId) {
        const offer = await myPeerConnection.createOffer();
        await myPeerConnection.setLocalDescription(new RTCSessionDescription(offer));

        socket.emit("call-user", {
          offer,
          to: socketId
        });
       }
    
    return (
        <li 
            onClick={() => callUser(socketId)} 
            style={{
                listStyleType: 'none',
                padding: '2px 10px 2px 10px',
                border: `2px solid ${colors.violet}`,
                borderRadius: '10px',
                cursor: 'pointer',
                marginLeft: '5px',
            }}
        >
            Appeler {name}
        </li>
    )
}

export default OnlineUser;