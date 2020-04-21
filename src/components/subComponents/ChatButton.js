import React from 'react';


const ChatButton = () => {
    const button = require("../../img/chat_moustache_trans.png");
    const styles = {
        container: {
            position: 'absolute',
            top: '90vh',
            right: 0,
            heigth: '5%'
        },
        button: {
            width: '50%',
            cursor: 'pointer',
        }
    }

    return (
        <div style={styles.container}>
            <img 
                src={button} 
                alt="chat moustache button"
                style={styles.button}
            />
        </div>
    )
}

export default ChatButton;