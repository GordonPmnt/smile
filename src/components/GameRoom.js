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
            isActive: false,
        },
        theme: 'none',
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
        this.setState({ activeJoke: { isActive: false } })
        this.setState({ theme: 'none' })
    };

    getRandomJoke = () => {
        this.setState({ theme : 'random' })
        this.setState({ activeJoke: { isActive: true } })

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

    getChuckJoke = () => {
        this.setState({ theme : 'chuck' })
        this.setState({ activeJoke: { isActive: true } })
    }

    getSexJoke = () => {
        this.setState({ theme : 'sex' })
        this.setState({ activeJoke: { isActive: true } })
    }

    getDarkJoke = () => {
        this.setState({ theme : 'dark' })
        this.setState({ activeJoke: { isActive: true } })
    }
    
    render() {
        const { theme, userIsActive, activeJoke } = this.state;

        return (
            <ThemeContext.Provider value={themes[theme]}>
                <div style={this.styles.container} >
                    <OpponentCam 
                        toggleActivity={this.toggleActivity}
                        activeJoke={activeJoke}
                    />
                    <SideBar 
                        getChuckJoke={this.getChuckJoke}
                        getDarkJoke={this.getDarkJoke}
                        getRandomJoke={this.getRandomJoke}
                        getSexJoke={this.getSexJoke}
                        userIsActive={userIsActive}
                    />
                </div>
            </ThemeContext.Provider>
        )
    }
}

export default GameRoom;