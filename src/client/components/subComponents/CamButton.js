import React from 'react';

class CamButton extends React.Component {

    constructor(props){
        super(props)
        this.state={
    
            button: {
                backgroundColor : 'white',
                boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.50)',
                position: 'absolute',
                marginLeft: '16%',
                marginTop: '-4%',
                cursor: 'pointer',
                height: '3em',
                width: '3em',
                borderRadius: '100%',
            },

            text: {
                display: 'flex',
                justifyContent: 'center',
            }
        }
    }
    
    render() {

        return (
            <div style={this.state.button}>
                <p style={this.state.text}>CAM</p>
            </div>
        )
    }
}

export default CamButton;


