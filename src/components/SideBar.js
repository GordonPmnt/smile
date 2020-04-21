import React from "react";
import MyCam from './MyCam';
import DecksList from './DecksList';
import Gallery from './Gallery';
import LiveChat from "./LiveChat";

export default function SideBar() {
    const styles = {
        sideContainer: {
            height: '100vh',
            width: '30%',
            margin: '0px',
        },
    }
    return (
        <div style={styles.sideContainer}>
            <DecksList/>
            <Gallery/>
            <MyCam mirrored={true} />
            <LiveChat />
        </div>
    );
}