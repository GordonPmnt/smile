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
        }
    }
    
    render() {
        const { mirrored } = this.props;
        
        return (
            <ThemeContext.Consumer>
            {theme =>
                <div>
                    <Webcam 
                    style={{...styles.cam, ...theme.borderColor}}
                    mirrored={mirrored}
                    />
                    <CamButton
                        onclick={this.switchCam}
                    
                    />
                    <MicroButton
                        //audioConstraints={audioConstraints}
                    />
                </div>
            }
            </ThemeContext.Consumer>
        )
    };

export default MyCam;
