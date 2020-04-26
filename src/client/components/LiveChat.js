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
        const { handleSubmit, historyMsg, handleMessage, currentMsg } = this.props;

        return (
            <div style={this.styles.container}>
                <ChatConversations
                    historyMsg={historyMsg}
                />
                <ChatInput 
                    handleSubmit={handleSubmit}
                    handleMessage={handleMessage}
                    currentMsg={currentMsg}
                />
            </div>
        );
    }
}

export default LiveChat;
