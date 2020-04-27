import React from "react";


class ChatInput extends React.Component {
    styles = {
        input: {
            width: '100%'
        }
    }

    render() {
        const { handleSubmit, handleMessage, message } = this.props

        return (
            <form 
                style={this.styles.input}
                onSubmit={event => handleSubmit(event)}
            >
                <input 
                    type="text-area" 
                    name="message"
                    value={message}
                    onChange={(event) => handleMessage(event)}
                />
            </form>
        );
    }
}

export default ChatInput;