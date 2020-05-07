import React from "react";
import Webcam from "react-webcam";
import CamButton from './subComponents/CamButton';
import MicroButton from './subComponents/MicroButton';
import { ThemeContext } from './styles/ThemeContext';
 
    
class MyCam extends React.Component {
    state = {
        microEnabled: false,
        videoEnabled: true,
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

    toggleVideo = () => {
        this.setState( prevState => ({
            videoEnabled : !prevState.videoEnabled
        }));
    }
    
    render() {
        const { mirrored, handleUserMedia, chatEnabled } = this.props;
        const { microEnabled, videoEnabled } = this.state
        
        return (
            <ThemeContext.Consumer>
            {theme =>
                <div style={chatEnabled ? { display: 'none' } : {}}>
                    <Webcam
                        id="my-cam" 
                        style={{...this.styles.cam, ...theme.borderColor}}
                        ref={ref => this.webcam = ref}
                        onUserMedia={() => handleUserMedia(this.webcam.stream)}
                        mirrored={mirrored}
                        audio={microEnabled}
                    />
                    <CamButton 
                        toggleVideo={this.toggleVideo}
                        videoEnabled={videoEnabled}
                    />
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
