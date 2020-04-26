import React from "react";
import ChatConversations from "./ChatConversations";
import ChatInput from "./ChatInput";


const LiveChat = ({ player }) => {
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

    return (
        <div style={styles.container}>
            <ChatConversations />
            <ChatInput player={player} />
        </div>
    );
}

export default LiveChat;
