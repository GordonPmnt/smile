import React from "react";
import Webcam from "react-webcam";
import CamButton from './subComponents/CamButton';
import MicroButton from './subComponents/MicroButton';
import { ThemeContext } from './styles/ThemeContext';
 
    
class MyCam extends React.Component {    
    state = {
        microEnabled: false,
        videoEnabled: true,
        stream: null,
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
    
    handleUserMedia = () => {
        const stream = this.webcam.stream
        this.setState({ stream })
        this.getUserMediaTracks(stream)
    }

    getUserMediaTracks = stream => {
        const { microEnabled, videoEnabled } = this.state;

        if(stream) {
            const [ audioTrack, videoTrack ] = stream.getTracks()

            if(microEnabled && videoEnabled) {
                console.log('audio', 'video')
                this.props.myPeerConnection.addTrack(audioTrack, stream)
                this.props.myPeerConnection.addTrack(videoTrack, stream)
            }
            if(microEnabled && !videoEnabled) {
                console.log('audio', '')
                this.props.myPeerConnection.addTrack(audioTrack, stream)
            }
            if(!microEnabled && videoEnabled) {
                console.log('', 'video')
                this.props.myPeerConnection.addTrack(videoTrack, stream)
            }
        };
    };

    resetTracks = stream => {
        this.props.myPeerConnection.getSenders().forEach(
            sender => this.props.myPeerConnection.removeTrack(sender)
        )
        this.getUserMediaTracks(stream)
    }

    toggleMicro = () => {
        this.setState(prevState => ({
            microEnabled : !prevState.microEnabled
        }), () => this.resetTracks(this.state.stream))    
    }

    toggleVideo = () => {
        this.setState( prevState => ({
            videoEnabled : !prevState.videoEnabled
        }), () => this.resetTracks(this.state.stream))
    }

    render() {
        const { mirrored, chatEnabled } = this.props;
        const { microEnabled, videoEnabled } = this.state;
        
        return (
            <ThemeContext.Consumer>
            {theme =>
                <div style={chatEnabled ? { display: 'none' } : {}}>
                    <Webcam
                        id="my-cam" 
                        style={{...this.styles.cam, ...theme.borderColor}}
                        ref={ref => this.webcam = ref}
                        onUserMedia={this.handleUserMedia}
                        mirrored={mirrored}
                        audio={true}
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
