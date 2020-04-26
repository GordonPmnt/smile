import React from "react";


class ChatConversations extends React.Component {
    styles = {
        container: {
            height: '80%',
            width: '100%',
            margin: '0px',
        },
    }

    render() {
        const { historyMsg } = this.props;
        
        return (
            <div style={this.styles.container}>
                {historyMsg.map(message =>
                    <p key={message}>{message}</p>
                )}
            </div>
        );
    }
}

export default ChatConversations;