import React from 'react';


const NextButton = ({ toggleActivity, deckLogo }) => {
    const styles = {
        logo: {
            height: "2em"
        },
        nextButton: {
            backgroundColor: 'white',
            display: 'inline-flex',
        }
    }

    return (
        <div style={styles.nextButton} onClick={() => toggleActivity()}>
            <img 
                src={deckLogo} 
                alt="Next Logo" 
                style={styles.logo} 
            />
            <p>NEXT</p>
        </div>
    )
}

export default NextButton;