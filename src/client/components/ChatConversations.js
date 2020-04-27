import React from "react";


const ChatConversations = ({ chat }) => {
    const styles = {
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
    
    return (
        <div style={styles.container}>
            {chat.map(msg =>
                <div 
                    key={msg.id + msg.sender}
                    style={styles.chat}
                >
                    <p style={styles.p}>{msg.sender}:</p>
                    <p style={styles.p}>{msg.message}</p> 
                </div>
            )}
        </div>
    );
};

export default ChatConversations;