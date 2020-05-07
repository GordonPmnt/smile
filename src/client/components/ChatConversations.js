import React from "react";


const ChatConversations = ({ chat }) => {
    const styles = {
        container: {
            height: '32vh',
            width: '100%',
            margin: '0px',
            overflowY: 'scroll',
        },
        chat: {
            display: 'flex',
            flexDirection: 'row',
            margin: '0 5px 0 5px',
            fontSize: '0.8em',
        },
        p: {
            margin: '0 5px 0 0',
        }
    }
    
    return (
        <div style={styles.container}>
            {chat.map((msg, i) =>
                <div 
                    key={msg.id + msg.socketId}
                    style={styles.chat}
                    className={ i === (chat.length - 1) && 'lastMessage'}
                >
                    <p style={styles.p}>{msg.sender}:</p>
                    <p style={styles.p}>{msg.message}</p> 
                </div>
            )}
        </div>
    );
};

export default ChatConversations;