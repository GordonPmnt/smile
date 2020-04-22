import React from "react";
import SideBar from "./SideBar";
import OpponentCam from "./OpponentCam";
import { ThemeContext, themes } from './styles/ThemeContext';
import axios from 'axios';


class GameRoom extends React.Component {
    state = {
        userIsActive: true,
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
        .get('/randomapi/joke/random', {
            method: 'get',
            headers: { 
                Authorization: 'FW6CstM9yETDGYTEqdL-R.4fNoGEUCRHW0SvHOGXo2YpK2j-4th5JY3pTT_qDtWX' 
            }
        })
        .then(response => {
            console.log(response)
            const { joke } = response.data;
            this.setState({ joke : joke.question });
            this.setState({ answer : joke.answer });
            this.setState({ category : 'random' });
            //console.log(joke)
            ;
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    getChuckJoke = () => {
        this.setState({ theme : 'chuck' })
        this.setState({ activeJoke: { isActive: true } })

        axios
        .get('/chuck/get', {
            method: 'get',
            params: { 
                hello: 'world' 
            }
        })
        .then(res => 
            console.log(res.data[0])
        )
        .catch(err => 
            console.log(err.message)
        )
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
                        activeJoke={activeJoke}
                    />
                </div>
            </ThemeContext.Provider>
        )
    }
}

export default GameRoom;