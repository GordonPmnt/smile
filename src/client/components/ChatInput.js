import React from "react";
import socketIOClient from 'socket.io-client'


class ChatInput extends React.Component {
    state = {
        message: ''
    };

    styles = {
        input: {
            width: '100%'
        }
    }

    backend = `http://127.0.0.1:8080?name=${this.props.player}`;
    socket = socketIOClient(this.backend)

    handleSubmit = event => {
        event.preventDefault();
        this.socket.emit(
            'chat message',
            `${this.props.player}: ${this.state.message}`
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
        const { message } = this.state;

        return (
            <form 
                style={this.styles.input}
                onSubmit={this.handleSubmit}
            >
                <input 
                    type="text-area" 
                    name="message"
                    value={message}
                    onChange={this.handleMessage}
                />
            </form>
        );
    }
}

export default ChatInput;