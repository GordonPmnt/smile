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
        historyMsg: [],
        currentMsg: '',
    };

    styles = {
        container: {
            height: '100vh',
            width: '30vw',
            margin: '0px',
        },
    };

    socketEndpoint = `http://127.0.0.1:8080?name=${this.props.player}`;
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
            `${this.props.player}: ${this.state.currentMsg}`
        )
        this.setState({
            currentMsg: ''
        })
    }

    handleMessage = event => {
        this.setState({
            currentMsg: event.target.value
        })
    }

    componentDidMount = () => {
        this.socket.on(
            'chat message', 
            (msg) => {
                this.setState({
                    historyMsg: [...this.state.historyMsg, msg]
                })
            }
        )
    }

    render() {
        const { chatEnabled, historyMsg, currentMsg } = this.state;
        
        return (
            <div style={this.styles.container}>
                <DecksList {...this.props} />
                <Gallery />
                {chatEnabled 
                    ? 
                        <LiveChat 
                            handleSubmit={this.handleSubmit} 
                            handleMessage={this.handleMessage}
                            historyMsg={historyMsg} 
                            currentMsg={currentMsg}
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
