import React from "react";
import SelectedJoke from "./SelectedJoke";
import ScreenshotButton from './subComponents/ScreenshotButton';
import { ThemeContext } from './styles/ThemeContext';
import OnlineUser from "./OnlineUser";


const OpponentCam = ({ handleEndOfturn, activeJoke, gameroom, socket, myPeerConnection, player, userIsActive, requestCapture, callMade, setCallMade }) => {   
    const webcamOff = require('../img/webcam-off.png');
    const daddy = require('../img/gentleman-transparent.png');
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
            zIndex: 10,
        },
        webcam: {
            width: '100%',
            margin: 'auto 0',
            borderRadius: '15px',
            border: 'solid 8px',
            zIndex: 1,
        },
        users: {
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute', 
            left: '30vw',
            marginLeft: '-20px',
            top: '50vh',
            marginTop: '-80px',
            textAlign: 'center',
        }
    };

    const activePlayers = [...Object.keys(gameroom)]

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
                        <h1 style={styles.users}>...veuillez patienter</h1>
                    :
                        <ul style={styles.users}>
                            <div>
                                <img src={daddy} alt="daddy" style={{ height: '100px' }}/>
                                <h1>Choisis un 2ème joueur</h1>
                            </div>
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
                    {callMade &&
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
                    }
                </div>
            </>
        }
        </ThemeContext.Consumer>
    );
}

export default OpponentCam;