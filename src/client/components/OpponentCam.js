import React from "react";
import SelectedJoke from "./SelectedJoke";
import ScreenshotButton from './subComponents/ScreenshotButton';
import { ThemeContext } from './styles/ThemeContext';
import OnlineUser from "./OnlineUser";
import { useState } from "react";


const OpponentCam = ({ handleEndOfturn, activeJoke, gameroom, socket, myPeerConnection, player, userIsActive, requestCapture }) => {   
    const webcamOff = require('../img/webcam-off.png');
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
        users: {
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute', 
            left: '30vw',
            marginLeft: '-20px',
            top: '50vh',
            marginTop: '-20px',
        }
    };

    const activePlayers = [...Object.keys(gameroom)]
    const [ callMade, setCallMade ] = useState(false)

    let video;
    myPeerConnection.ontrack = ({ streams: [stream] }) => {
        video.srcObject = stream
    };
    
    return (
        <ThemeContext.Consumer>
        {theme => 
            <>
                <div  style={{...styles.container}}>
                    {callMade 
                    ?
                        <p style={styles.users}>...veuillez patienter</p>
                    :
                        <ul style={styles.users}>
                            {activePlayers.filter(name => name !== player).map(
                                name => <OnlineUser 
                                    key={gameroom[name].socketId} 
                                    socketId={gameroom[name].socketId}
                                    myPeerConnection={myPeerConnection}
                                    name={name}
                                    socket={socket}
                                    setCallMade={setCallMade}
                                />
                            )}
                        </ul>
                    }
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
                                userIsActive={userIsActive}
                                handleEndOfturn={handleEndOfturn}
                                requestCapture={requestCapture}
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