import React from "react";


class ChatInput extends React.Component {
    styles = {
        input: {
            width: '100%',
            border: 'solid 2px rgb(97, 109, 226)',
            borderRadius: '5px'
        }
    }

    render() {
        const { handleSubmit, handleMessage, message } = this.props

        return (
            <form 
                onSubmit={event => handleSubmit(event)}
            >
                <input 
                    style={this.styles.input}
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