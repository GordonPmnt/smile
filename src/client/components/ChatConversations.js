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
        const { chat } = this.props;
        
        return (
            <div style={this.styles.container}>
                {chat.map(msg =>
                    <div key={msg.id + msg.sender}>
                        <p>{msg.sender}:</p>
                        <p>{msg.message}</p> 
                    </div>
                )}
            </div>
        );
    }
}

export default ChatConversations;