import React from "react";
import ChatConversations from "./ChatConversations";
import ChatInput from "./ChatInput";
import socketIOClient from 'socket.io-client'


const LiveChat = () => {
    const styles = {
        container: {
            height: '30vh',
            width: '100%',
            margin: '0px',
        },
    }

    const backend = "http://127.0.0.1:8080?name=Gordon";
    const socket = socketIOClient(backend)

    return (
        <div style={styles.container}>
            <ChatConversations />
            <ChatInput />
        </div>
    );
}

export default LiveChat;
