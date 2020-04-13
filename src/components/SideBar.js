import React from "react";
import ChatConversation from "./ChatConversation"

export default function SideBar() {
    const styles = {
        sideContainer: {
            backgroundColor: 'blue',
            height: '100vh',
            width: '30%',
            margin: '0px',
            display: 'flex',
        },
    }
    return (
        <div style={styles.sideContainer}>
            <ChatConversation />
        </div>
    );
}