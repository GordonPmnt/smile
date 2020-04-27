import React from "react";


const ChatInput = ({ handleSubmit, handleMessage, message }) => {
    const styles = {
        input: {
            width: '100%',
            border: 'solid 2px rgb(97, 109, 226)',
            borderRadius: '5px'
        }
    }

    return (
        <form 
            onSubmit={event => handleSubmit(event)}
        >
            <input 
                style={styles.input}
                type="text-area" 
                name="message"
                value={message}
                onChange={(event) => handleMessage(event)}
            />
        </form>
    );
};

export default ChatInput;