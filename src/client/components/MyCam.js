import React from "react";
import Webcam from "react-webcam";
import CamButton from './subComponents/CamButton';
import MicroButton from './subComponents/MicroButton';
import { ThemeContext } from './styles/ThemeContext';
 
    
class MyCam extends React.Component {
    styles = {
        cam: {
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%',
            borderRadius: '10px',
            border: 'solid 3px',
        },

        switchMicro: {
            border: 'solid 10px',
        }
    }
    
    render() {
        const { mirrored } = this.props;
        const { audio } = this.props;
        
        return (
            <ThemeContext.Consumer>
            {theme =>
                <div>
                    <Webcam 
                    style={{...this.styles.cam, ...theme.borderColor}}
                    mirrored={mirrored}
                    />
                    <CamButton
                        //onclick={this.switchCam}
                        // audio={audio}
                    />
                    <MicroButton
                        onclick={this.styles.switchMicro}
                        audio={audio}
                    />
                </div>
            }
            </ThemeContext.Consumer>
        )
    };
}

export default MyCam;
