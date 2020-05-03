import React from 'react';

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
        <li onClick={() => callUser(socketId)} >
            {name} - {socketId}
        </li>
    )
}

export default OnlineUser;