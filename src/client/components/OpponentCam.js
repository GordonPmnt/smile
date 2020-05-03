import React from "react";
import SelectedJoke from "./SelectedJoke";
import ScreenshotButton from './subComponents/ScreenshotButton';
import { ThemeContext } from './styles/ThemeContext';
import OnlineUser from "./OnlineUser";


const OpponentCam = ({ handleEndOfturn, activeJoke, gameroom, socket, myPeerConnection }) => {
    const styles = {
        container: {
            margin: '5vh 5vh 5vh 5vh',
            height: '90vh',
            width: '60vw',
            display: 'flex',
            justifyContent: 'center',
        },
        OpponentInterface: {
            position: 'absolute',
            height: '96%',
            top: '4%',
            left: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        webcam: {
            width: '100%',
            margin: 'auto 0',
            borderRadius: '15px',
            border: 'solid 5px',
        },
    };

    const activePlayers = [...Object.keys(gameroom)]

    const { RTCSessionDescription } = window;
    
    socket && socket.on("call-made", async data => {
        await myPeerConnection.setRemoteDescription(
          new RTCSessionDescription(data.offer)
        );
        const answer = await myPeerConnection.createAnswer();
        await myPeerConnection.setLocalDescription(new RTCSessionDescription(answer));

        socket.emit("make-answer", {
          answer,
          to: data.socket
        });
    });

    socket && socket.on("answer-made", async data => {
        await myPeerConnection.setRemoteDescription(
          new RTCSessionDescription(data.answer)
        );
    });

    let video;
    myPeerConnection.ontrack = ({ streams: [stream] }) => {
        video.srcObject = stream
    };
    
    return (
        <ThemeContext.Consumer>
        {theme => 
            <>
                <ul style={{ position: 'absolute', top: '5vh', left: '5vw' }}>
                    {activePlayers.map(
                        name => <OnlineUser 
                            key={gameroom[name]} 
                            socketId={gameroom[name]}
                            myPeerConnection={myPeerConnection}
                            name={name}
                            socket={socket}
                        />
                    )}
                </ul>
                <div  style={{...styles.container}}>
                    <video
                        autoPlay
                        id="remote-cam" 
                        style={{...styles.webcam, ...theme.borderColor}}
                        ref={ref => video = ref}
                    />
                    <div style={styles.OpponentInterface}>
                        {activeJoke.isActive &&
                            <SelectedJoke 
                                handleEndOfturn={handleEndOfturn}
                                activeJoke={activeJoke}
                            />
                        }
                            <ScreenshotButton 
                                handleEndOfturn={handleEndOfturn}
                                theme={theme}
                            />
                    </div>
                </div>
            </>
        }
        </ThemeContext.Consumer>
    );
}

export default OpponentCam;