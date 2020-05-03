import React from "react";
import SideBar from "./SideBar";
import OpponentCam from "./OpponentCam";
import { ThemeContext, themes } from './styles/ThemeContext';
import axios from 'axios';
import socketIOClient from 'socket.io-client';
import { config } from '../../config';


class GameRoom extends React.Component {
    state = {
        userIsActive: false, //initial must always be false
        activeJoke: {
            joke: '',
            answer: '',
            isActive: false,
        },
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

    componentDidMount = () => {
        if(this.props.player) {
            const { player } = this.props;
            this.socketEndpoint = `${config.socket.aws}?name=${this.props.player}`;
            this.socket = socketIOClient(this.socketEndpoint);
            this.socket.on(
                'player status',
                playerSatus => {
                    if(playerSatus.player !== player) {
                        this.toggleActivity()
                    };
                }
            );
            // on first connection:
            this.socket.on(
                'room-size', size => { if(size === 1) { this.toggleActivity()} }
            );
            this.socket.on(
                'update-user-list', gameroom => this.setState({ gameroom })
            );
            this.socket.on(
                'chat message', 
                msg => {
                    this.setState({
                        chat: [...this.state.chat, msg]
                    })
                }
            )
        };
    };

    toggleActivity = () => {
        this.setState( prevState => ({
            userIsActive : !prevState.userIsActive
        }));
        this.setState({ activeJoke: { isActive: false } });
        this.setState({ theme: 'none' });
    };

    handleEndOfturn = () => {
        const { userIsActive } = this.state;
        const { player } = this.props;

        this.toggleActivity()
        this.socket.emit(
            'player status',
            { player, status: userIsActive }
        );
    };

    handleUserMedia = stream => {
        if(stream) {
            stream.getTracks().forEach(
                track => this.props.myPeerConnection.addTrack(track, stream)
            );
        };
    };

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
        const { theme, userIsActive, activeJoke, gameroom, chat } = this.state;
        const { player, myPeerConnection, history } = this.props;

        if(!player) { history.push('/') }        

        return (
            <ThemeContext.Provider value={themes[theme]}>
                <div style={this.styles.container} >
                    <OpponentCam 
                        handleEndOfturn={this.handleEndOfturn}
                        activeJoke={activeJoke}
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
                        userIsActive={userIsActive}
                        activeJoke={activeJoke}
                        player={player}
                        handleUserMedia={this.handleUserMedia}
                        chat={chat}
                    />
                </div>
            </ThemeContext.Provider>
        )
    }
}

export default GameRoom;
