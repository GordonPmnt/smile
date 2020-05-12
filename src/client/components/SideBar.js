import React from "react";
import MyCam from './MyCam';
import DecksList from './DecksList';
import Gallery from './Gallery';
import LiveChat from "./LiveChat";
import ChatButton from './subComponents/ChatButton';


class SideBar extends React.Component {
    state = {
        chatEnabled: false,
        message: '',
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

    handleSubmit = event => {
        event.preventDefault();
        const { socket } = this.props
        socket.emit(
            'chat message',
            { 
                sender: this.props.player,
                message: this.state.message,
            }
        )
        this.setState({
            message: ''
        })
    }

    handleMessage = event => {
        this.setState({
            message: event.target.value
        })
    }

    render() {
        const { chatEnabled, message } = this.state;
<<<<<<< HEAD
<<<<<<< HEAD
        const { chat, myPeerConnection, looserCaptureImg, winnerCaptureImg, capture } = this.props;
=======
        const { chat, myPeerConnection, opponentCaptureImg, myCaptureImg, capture } = this.props;
>>>>>>> Function capture
=======
        const { chat, myPeerConnection, looserCaptureImg, winnerCaptureImg, capture } = this.props;
>>>>>>> function capture => myCam
    
        return (
            <div style={this.styles.container}>
                <DecksList {...this.props} />
                <Gallery 
<<<<<<< HEAD
<<<<<<< HEAD
                    winnerCaptureImg={winnerCaptureImg}
                    looserCaptureImg={looserCaptureImg}
=======
                    myCaptureImg={myCaptureImg}
                    opponentCaptureImg={opponentCaptureImg}
>>>>>>> Function capture
=======
                    winnerCaptureImg={winnerCaptureImg}
                    looserCaptureImg={looserCaptureImg}
>>>>>>> function capture => myCam
                />
                    <LiveChat 
                        handleSubmit={this.handleSubmit} 
                        handleMessage={this.handleMessage}
                        chatEnabled={chatEnabled}
                        chat={chat} 
                        message={message}
                    /> 
                    <MyCam 
                        mirrored={true}
                        myPeerConnection={myPeerConnection}
                        chatEnabled={chatEnabled}
                        capture={capture}
                    />
                <ChatButton handleChatDisplay={this.handleChatDisplay} />
            </div>
        )
    };
};

export default SideBar;
