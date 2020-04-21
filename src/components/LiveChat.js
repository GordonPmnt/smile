import React from "react";
import ChatConversations from "./ChatConversations";
import ChatInput from "./ChatInput";
import ChatButton from './subComponents/ChatButton';


const LiveChat = () => {

    const styles = {
        container: {
            backgroundColor: '#59BBF3',
            height: '30vh',
            width: '100%',
            margin: '0px',
        },
    }
    return (
        <div style={styles.container}>
            <ChatConversations />
            <ChatInput />
            <ChatButton />
        </div>
    );
}

export default LiveChat;