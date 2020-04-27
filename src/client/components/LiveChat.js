import React from "react";
import ChatConversations from "./ChatConversations";
import ChatInput from "./ChatInput";


class LiveChat extends React.Component {
    styles = {
        container: {
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%',
            borderRadius: '10px',
            flexDirection: 'column',
        },
    }

    render() {
        const { handleSubmit, chat, handleMessage, message } = this.props;

        return (
            <div style={this.styles.container}>
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
    }
}

export default LiveChat;
