import React from "react";
import ChatConversations from "./ChatConversations";
import ChatInput from "./ChatInput";


const LiveChat = ({ handleSubmit, handleMessage, chat, message, chatEnabled  }) => {
    const styles = {
        container: {
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%',
            border: 'solid 2px rgb(97, 109, 226)',
            borderRadius: '5px',
            flexDirection: 'column',
        },
    }

    return (
        <div style={ chatEnabled ? {...styles.container} : { display: 'none' } }>
            <ChatConversations
                chat={chat}
            />
            <ChatInput 
                handleSubmit={handleSubmit}
                handleMessage={handleMessage}
                message={message}
            />
        </div>
    );
};

export default LiveChat;
