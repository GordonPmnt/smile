import React from "react";
import ChatConversation from "./ChatConversation"
import MyCam from './MyCam';

export default function SideBar() {
    const styles = {
        sideContainer: {
            backgroundColor: 'blue',
            height: '100vh',
            width: '30%',
            margin: '0px',
        },
    }
    return (
        <div style={styles.sideContainer}>
            <MyCam mirrored={true} />
            <ChatConversation />
        </div>
    );
}