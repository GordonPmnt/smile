import React from "react";
import SideBar from "./SideBar";
import OpponentCam from "./OpponentCam";
import { ThemeContext, themes } from './styles/ThemeContext';
import axios from 'axios';
import socketIOClient from 'socket.io-client';
import { config } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class GameRoom extends React.Component {
    state = {
        userIsActive: false,
        activeJoke: {
            joke: '',
            answer: '',
            isActive: false,
        },
        screenshots: [],
        winnerCapture: '',
        looserCapture: '',
        chat: [],
        theme: 'none',
        gameroom: {},
    };

    styles = {
        container: {
            display: 'flex',
            height: '100vh',
            width: '100%',
            margin: '0px',
        },
    }

    socketEndpoint = `${config.socket.aws}?name=${this.props.player}`;
    socket = socketIOClient(this.socketEndpoint);
    componentDidMount = () => {
        if (this.state.userIsActive) {
            this.notify()
        };
        if(this.props.player) {
            const { player } = this.props;
            this.socket.on(
                'update-gameroom', gameroom =>{ 
                    const { userIsActive } = gameroom[player]
                    this.setState({ 
                        gameroom,
                        userIsActive, 
                })}
            );
            this.socket.on(
                'chat message', 
                msg => {
                    this.setState({
                        chat: [...this.state.chat, msg]
                    })
                }
            )
            const { RTCSessionDescription } = this.props.window;
    
            this.socket.on("call-made", async data => {
                await this.props.myPeerConnection.setRemoteDescription(
                  new RTCSessionDescription(data.offer)
                );
                const answer = await this.props.myPeerConnection.createAnswer();
                await this.props.myPeerConnection.setLocalDescription(new RTCSessionDescription(answer));
        
                this.socket.emit("make-answer", {
                  answer,
                  to: data.socket
                });
            });
        
            this.socket.on("answer-made", async data => {
                await this.props.myPeerConnection.setRemoteDescription(
                  new RTCSessionDescription(data.answer)
                );
            });
            this.socket.on("screenshot", screenshot => {
                const { shotId, winnerCapture, looserCapture } = screenshot
                if(winnerCapture) {
                    this.setState({ winnerCapture })
                }
                if(looserCapture) {
                    this.setState({ looserCapture })
                }
                //TBD here: this setState screenshots []
            })
        }
    }

    capture = () => {
        return  this.props.player + "CAPTURE" // must return a string
    }

    handleEndOfturn = () => {
        const { gameroom } = this.state;
        for(let player in gameroom) {
            gameroom[player].userIsActive = !gameroom[player].userIsActive 
        }
        this.socket.emit("update-gameroom", gameroom)
    };

    handleUserMedia = stream => {
        if(stream) {
            stream.getTracks().forEach(
                track => this.props.myPeerConnection.addTrack(track, stream)
            );
        };
    };

    requestCapture = () => {
        const { gameroom } = this.state;
        this.socket.emit('request capture', { winner: this.props.player, gameroom })
    }

    notify = () => toast("A ton tour de jouer!", {
        position: "top-center",
        type: "info"
    });

    componentDidUpdate(prevProps, prevState) {
        if(prevState.userIsActive !== this.state.userIsActive && this.state.userIsActive) {
            this.notify()
        }
    } 

    getRandomJoke = () => {
        this.setState({ theme : 'random' })
        axios
          .get('/joke/random', {
              method: 'get',
              headers: {
                  Authorization: 'FW6CstM9yETDGYTEqdL-R.4fNoGEUCRHW0SvHOGXo2YpK2j-4th5JY3pTT_qDtWX'
              }
          })
          .then(response => {
            this.setState({
                activeJoke: {
                    joke : response.data.joke.question,
                    answer: response.data.joke.answer,
                    isActive: true,
                } 
            });
          })
          .catch(err => {
              console.log(err.message)
          })
    }

    getChuckJoke = () => {
        this.setState({ theme : 'chuck' })
        axios
        .get('/chuck/random')
        .then(response => {
            console.log(response)
            this.setState({
                activeJoke: {
                    joke: response.data.joke,
                    isActive: true,
                } 
            })
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    getSexJoke = () => {
        this.setState({ theme : 'sex' })
        axios
        .get('/sex/random')
        .then(response => {
            console.log(response)
            this.setState({
                activeJoke: {
                    joke: response.data.joke,
                    isActive: true,
                } 
            })
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    getDarkJoke = () => {
        this.setState({ theme : 'dark' })
        axios
        .get('/dark/random')
        .then(response => {
            console.log(response)
            this.setState({
                activeJoke: {
                    joke: response.data.joke,
                    answer: response.data.answer,
                    isActive: true,
                } 
            })
        })
        .catch(err => {
            console.log(err.message)
        })
    }    

    render() {

        const { 
            theme, 
            userIsActive, 
            activeJoke, 
            gameroom, 
            chat,
            capture,
            looserCapture,
            winnerCapture,
        } = this.state;
        
        const { player, myPeerConnection, history } = this.props;

        // This forces player to exit room if not named
        if(!player) { history.push('/') }        

        return (
            <ThemeContext.Provider value={themes[theme]}>
                <div style={this.styles.container} >
                    <OpponentCam 
                        handleEndOfturn={this.handleEndOfturn}
                        activeJoke={activeJoke}
                        userIsActive={userIsActive}
                        requestCapture={this.requestCapture}
                        gameroom={gameroom}
                        socket={this.socket}
                        myPeerConnection={myPeerConnection}
                        player={player}
                    />
                    <SideBar
                        socket={this.socket} 
                        getChuckJoke={this.getChuckJoke}
                        getDarkJoke={this.getDarkJoke}
                        getRandomJoke={this.getRandomJoke}
                        getSexJoke={this.getSexJoke}
                        myPeerConnection={myPeerConnection}
                        userIsActive={userIsActive}
                        activeJoke={activeJoke}
                        player={player}
                        chat={chat}
                        looserCapture={looserCapture}
                        winnerCapture={winnerCapture}
                        capture={this.capture}
                        ref={this.webcamRef}
                    />
                    <ToastContainer />
                </div>
            </ThemeContext.Provider>
        )
    }
}

export default GameRoom;
