import React from "react";
import MyCam from './MyCam';
import DecksList from './DecksList';
import Gallery from './Gallery';
import LiveChat from "./LiveChat";

class SideBar extends React.Component {
    styles = {
        container: {
            height: '100vh',
            width: '30%',
            margin: '0px',
        },
    }

    render() {
        return (
            <div style={this.styles.container}>
                <DecksList/>
                <Gallery/>
                <MyCam mirrored={true} />
                <LiveChat />
            </div>
        )
    }
}

export default SideBar;