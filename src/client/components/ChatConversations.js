import React from "react";


class ChatConversations extends React.Component {
    styles = {
        container: {
            height: '32vh',
            width: '100%',
            margin: '0px',
            border: 'solid 2px rgb(97, 109, 226)',
            borderRadius: '5px'
        },
        chat: {
            display: 'flex',
            flexDirection: 'row',
            margin: '0 5px 0 5px',
            fontSize: '0.8em',
        },
        p: {
            margin: '0 5px 0 0'
        }
    }

    render() {
        const { chat } = this.props;
        
        return (
            <div style={this.styles.container}>
                {chat.map(msg =>
                    <div 
                        key={msg.id + msg.sender}
                        style={this.styles.chat}
                    >
                        <p style={this.styles.p}>{msg.sender}:</p>
                        <p style={this.styles.p}>{msg.message}</p> 
                    </div>
                )}
            </div>
        );
    }
}

export default ChatConversations;