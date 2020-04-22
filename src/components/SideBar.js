import React from "react";
import MyCam from './MyCam';
import DecksList from './DecksList';
import Gallery from './Gallery';
import LiveChat from "./LiveChat";
import ChatButton from './subComponents/ChatButton';

class SideBar extends React.Component {
    state = {
        chatEnabled: false
    };

    styles = {
        container: {
            height: '100vh',
            width: '30vw',
            margin: '0px',
        },
    }

    render() {
        const { chatEnabled } = this.state;
        console.log(this.props)
        return (
            <div style={this.styles.container}>
                <DecksList {...this.props} />
                <Gallery />
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
