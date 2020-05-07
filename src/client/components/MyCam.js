import React from "react";
import Webcam from "react-webcam";
import CamButton from './subComponents/CamButton';
import MicroButton from './subComponents/MicroButton';
import { ThemeContext } from './styles/ThemeContext';
 
    
class MyCam extends React.Component {
    state = {
        microEnabled: false,
    }
    
    styles = {
        cam: {
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%',
            borderRadius: '10px',
            border: 'solid 3px',
        },
    }

    toggleMicro = () => {
        this.setState( prevState => ({
            microEnabled : !prevState.microEnabled
        }));
    }
    
    render() {
        const { mirrored, handleUserMedia } = this.props;
        const { microEnabled } = this.state
        
        return (
            <ThemeContext.Consumer>
            {theme =>
                <div>
                    <Webcam
                        id="my-cam" 
                        style={{...this.styles.cam, ...theme.borderColor}}
                        ref={ref => this.webcam = ref}
                        onUserMedia={() => handleUserMedia(this.webcam.stream)}
                        mirrored={mirrored}
                        audio={microEnabled}
                    />
                    <CamButton />
                    <MicroButton
                        toggleMicro={this.toggleMicro}
                        microEnabled={microEnabled}
                    />
                </div>
            }
            </ThemeContext.Consumer>
        )
    };
}

export default MyCam;
