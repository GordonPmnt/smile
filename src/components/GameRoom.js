import React from "react";
import SideBar from "./SideBar";
import OpponentCam from "./OpponentCam";
import { ThemeContext, themes } from './styles/ThemeContext';
import axios from 'axios';


class GameRoom extends React.Component {
    state = {
        userIsActive: false,
        activeJoke: {
            joke: '',
            answer: '',
            category: 'none',
        },
        theme: 'random',
    };

    styles = {
        container: {
            display: 'flex',
            height: '100vh',
            width: '100%',
            margin: '0px',
        },
    }

    toggleActivity = () => {
        this.setState( prevState => ({
            userIsActive : !prevState.userIsActive
        }))
    };

    getRandomJoke = () => {
        axios
        .get('/api/joke/random', {
            method: 'get',
            headers: { 
                Authorization: 'FW6CstM9yETDGYTEqdL-R.4fNoGEUCRHW0SvHOGXo2YpK2j-4th5JY3pTT_qDtWX' 
            }
        })
        .then(response => {
            const { joke } = response.data
            console.log(joke)
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    
    render() {
        return (
            <ThemeContext.Provider value={themes[this.state.theme]}>
                <div style={this.styles.container} >
                    <OpponentCam 
                        toggleActivity={this.toggleActivity}
                    />
                    <SideBar 
                        userIsActive={this.state.userIsActive}
                        getRandomJoke={this.getRandomJoke}
                    />
                </div>
            </ThemeContext.Provider>
        )
    }
}

export default GameRoom;