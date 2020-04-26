import React from "react";
import ChatConversations from "./ChatConversations";
import ChatInput from "./ChatInput";
import socketIOClient from 'socket.io-client'


const LiveChat = () => {
    const styles = {
        container: {
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%',
            borderRadius: '10px',
            flexDirection: 'column',
        },
    }

    const backend = "http://127.0.0.1:8080?name=Gordon";
    const socket = socketIOClient(backend)

    return (
        <div style={styles.container}>
            <ChatConversations />
            <ChatInput player={player} />
        </div>
    );
}

export default LiveChat;
