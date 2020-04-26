import React from "react";


const ChatInput = () => {
    const styles = {
        chatInputBox: {
            height: '20%',
            width: '100%',
            margin: '0px',
        },
    }
    return (
        <div style={styles.chatInputBox}>
            <input type="text-area" name="player" />
        </div>
    );
}

export default ChatInput;