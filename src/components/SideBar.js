import React from "react";
import MyCam from './MyCam';
import DecksList from './DecksList';
import Gallery from './Gallery';
import LiveChat from "./LiveChat";
import ChatButton from './subComponents/ChatButton';

class SideBar extends React.Component {
    state = {
        chatEnabled: false
    }

    styles = {
        container: {
            height: '100vh',
            width: '30%',
            margin: '0px',
        },
    }

    render() {
        const { chatEnabled } = this.state;

        return (
            <div style={this.styles.container}>
                <DecksList/>
                <Gallery/>
                <MyCam mirrored={true} />
                {chatEnabled
                    ? <LiveChat />
                    : <ChatButton />
                }
            </div>
        )
    }
}

export default SideBar;