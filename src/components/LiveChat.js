import React from "react";

export default function LiveChat() {
    const styles = {
        liveChatBox: {
            backgroundColor: 'white',
            height: '80%',
            width: '100%',
            margin: '0px',
        },
    }
    return (
        <div style={styles.liveChatBox}>
            Salut
            ca va bien ? Ceci est le LiveChat component
        </div>
    );
}