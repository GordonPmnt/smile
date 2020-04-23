import React from "react";

export default function ChatInput() {
    const styles = {
        chatInputBox: {
            backgroundColor: 'grey',
            height: '20%',
            width: '100%',
            margin: '0px',
        },
    }
    return (
        <div style={styles.chatInputBox}>
            -> .... chat input
        </div>
    );
}