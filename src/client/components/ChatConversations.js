import React from "react";


class ChatConversations extends React.Component {
    state = {
        messages: [
            'Hey',
            'Ca va ?',
            'Prêt à jouer ???'
        ]
    }

    styles = {
        container: {
            height: '80%',
            width: '100%',
            margin: '0px',
        },
    }

    render() {
        const { messages } = this.state
        
        return (
            <div style={this.styles.container}>
                {messages.map(message =>
                    <p key={message}>{message}</p>
                )}
            </div>
        );
    }
}

export default ChatConversations;