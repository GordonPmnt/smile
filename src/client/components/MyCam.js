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

    componentDidMount = () => {
        //const myCam = document.getElementById('my-cam');
        //this.stream = myCam.captureStream();
        this.handleUserMedia()
    }

    handleUserMedia = () => {
        let stream = this.webcam.stream;
        console.log(stream);
        if(stream) {
            let videoTracks = stream.getVideoTracks();
            console.log(videoTracks)
        };
      };
    
    render() {
        const { mirrored } = this.props;
        const { audio } = this.props;
        
        return (
            <ThemeContext.Consumer>
            {theme =>
                <div>
                    <Webcam
                        id="my-cam" 
                        style={{...this.styles.cam, ...theme.borderColor}}
                        ref={ref => this.webcam = ref}
                        onUserMedia={this.handleUserMedia}
                        mirrored={mirrored}
                    />
                    <CamButton />
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
