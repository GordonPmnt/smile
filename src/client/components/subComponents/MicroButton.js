import React from 'react';

class MicroButton extends React.Component {

    constructor(props){
        super(props)
        this.state= {

            button: {
                backgroundColor : 'white',
                boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.50)',
                position: 'absolute',
                marginLeft: '11%',
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
        const {audio} = this.props;

        return (
            <div style={this.state.button}
            audio={audio}
            >
                <p style={this.state.text}>MICRO</p>
            </div>
        );
    }
}


export default MicroButton;