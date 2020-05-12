import React, { useState, useEffect, useCallback } from "react";
import Webcam from "react-webcam";
import CamButton from './subComponents/CamButton';
import MicroButton from './subComponents/MicroButton';
import { ThemeContext } from './styles/ThemeContext';
 
    
const MyCam = ({ myPeerConnection, mirrored, chatEnabled, socket, player }) => {    
    const [ microEnabled, setMicroEnabled ] = useState(false)
    const [ videoEnabled, setVideoEnabled ] = useState(true)
    const [ stream, setStream ] = useState(null)
    
    const styles = {
        cam: {
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%',
            minHeight: '260px',
            borderRadius: '10px',
            border: 'solid 3px',
        },
    }
    
    const webcamRef = React.useRef(null);

    useEffect(
        () => {
            socket &&
            socket.on("execute capture", screenshot => {
                const { winner } = screenshot
                if(player === winner) {
                    screenshot.winnerCapture = capture()
                }
                if(player !== winner) {
                    screenshot.looserCapture = capture()
                } 
                socket.emit(
                    "capture taken",
                    screenshot
                )
            })
        }, []
    );

    const capture = useCallback(() => {
        return webcamRef.current.getScreenshot();
    }, [])

    const handleUserMedia = () => {
        const { stream } = webcamRef.current
        setStream(stream)
        getUserMediaTracks(stream)
    }

    const getUserMediaTracks = stream => {
        if(stream) {
            const [ audioTrack, videoTrack ] = stream.getTracks()
            if(microEnabled && videoEnabled) {
                myPeerConnection.addTrack(audioTrack, stream)
                myPeerConnection.addTrack(videoTrack, stream)
            }
            if(microEnabled && !videoEnabled) {
                myPeerConnection.addTrack(audioTrack, stream)
            }
            if(!microEnabled && videoEnabled) {
                myPeerConnection.addTrack(videoTrack, stream)
            }
        };
    };

    const resetTracks = stream => {
        myPeerConnection.getSenders().forEach(
            sender => myPeerConnection.removeTrack(sender)
        )
        getUserMediaTracks(stream)
    }

    const toggleMicro = () => {
        setMicroEnabled(!microEnabled)
    };
    const toggleVideo = () => {
        setVideoEnabled(!videoEnabled)
    };
    useEffect(() => {
        resetTracks(stream)
    }, [microEnabled, videoEnabled])
        
    return (
        <ThemeContext.Consumer>
        {theme =>
            <div style={chatEnabled ? { display: 'none' } : {}}>
                <Webcam
                    id="my-cam" 
                    style={{
                        ...styles.cam, 
                        ...theme.borderColor,
                        display: videoEnabled ? 'flex' : 'none',
                    }}
                    ref={webcamRef}
                    onUserMedia={handleUserMedia}
                    mirrored={mirrored}
                    audio={true}
                />
                <div
                    style={{
                        ...styles.cam, 
                        ...theme.borderColor,
                        display: videoEnabled ? 'none' : 'flex',
                        background: `url(${require('../img/webcam-off.png')}) no-repeat center center`
                    }}
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


export default MyCam;
