import React from "react";
import MyCam from './MyCam';
import DecksList from './DecksList';
import Gallery from './Gallery';
import LiveChat from "./LiveChat";
import ChatButton from './subComponents/ChatButton';
import socketIOClient from 'socket.io-client';


class SideBar extends React.Component {
    state = {
        chatEnabled: false,
        chat: [],
        message: '',
    };

    styles = {
        container: {
            height: '100vh',
            width: '30vw',
            margin: '0px',
        },
    };

    socketEndpoint = `http://localhost:8080?name=${this.props.player}`;
    socket = socketIOClient(this.socketEndpoint);

    handleChatDisplay = () => {
        this.setState(prevState => ({
            chatEnabled: !prevState.chatEnabled
        }))
    };

    handleSubmit = event => {
        event.preventDefault();
        this.socket.emit(
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

    componentDidMount = () => {
        this.socket.on(
            'chat message', 
            msg => {
                this.setState({
                    chat: [...this.state.chat, msg]
                })
            }
        )
    }

    render() {
        const { chatEnabled, chat, message } = this.state;
        
        return (
            <div style={this.styles.container}>
                <DecksList {...this.props} />
                <Gallery />
                {chatEnabled 
                    ? 
                        <LiveChat 
                            handleSubmit={this.handleSubmit} 
                            handleMessage={this.handleMessage}
                            chat={chat} 
                            message={message}
                        />
                    : 
                        <MyCam mirrored={true} />
                }
                <ChatButton handleChatDisplay={this.handleChatDisplay} />
            </div>
        )
    };
};

export default SideBar;
