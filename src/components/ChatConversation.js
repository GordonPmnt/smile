import React from "react";
import LiveChat from "./LiveChat";
import ChatInput from "./ChatInput";

export default function ChatConversation() {
    const styles = {
        chatBox: {
            backgroundColor: '#59BBF3',
            height: '30vh',
            width: '100%',
            margin: '0px',
        },
    }
    return (
        <div style={styles.chatBox}>
            <LiveChat />
            <ChatInput />
        </div>
    );
}