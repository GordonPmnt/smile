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
    };

    handleChatDisplay = () => {
        this.setState(prevState => ({
            chatEnabled: !prevState.chatEnabled
        }))
    };

    render() {
        const { chatEnabled } = this.state;
        const { player } = this.props;

        return (
            <div style={this.styles.container}>
                <DecksList {...this.props} />
                <Gallery />
                {chatEnabled 
                    ? <LiveChat player={player} />
                    : <MyCam mirrored={true} />
                }
                <ChatButton handleChatDisplay={this.handleChatDisplay} />
            </div>
        )
    }
}

export default SideBar;
