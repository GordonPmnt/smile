import React from "react";
import MyCam from './MyCam';
import DecksList from './DecksList';
import Gallery from './Gallery';
import LiveChat from "./LiveChat";

export default function SideBar() {
    const styles = {
        container: {
            height: '100vh',
            width: '30%',
            margin: '0px',
        },
    }
    return (
        <div style={styles.container}>
            <DecksList/>
            <Gallery/>
            <MyCam mirrored={true} />
            <LiveChat />
        </div>
    );
}