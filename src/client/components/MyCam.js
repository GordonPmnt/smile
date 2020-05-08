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
    }
    
    render() {
        const { 
            mirrored, 
            handleUserMedia, 
            chatEnabled, 
            toggleVideo, 
            toggleMicro, 
            microEnabled, 
            videoEnabled,  
        } = this.props;
        
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
                        audio={true}
                    />
                    <CamButton 
                        toggleVideo={toggleVideo}
                        videoEnabled={videoEnabled}
                    />
                    <MicroButton
                        toggleMicro={toggleMicro}
                        microEnabled={microEnabled}
                    />
                </div>
            }
            </ThemeContext.Consumer>
        )
    };
}

export default MyCam;
