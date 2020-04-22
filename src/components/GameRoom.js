import React from "react";
import SideBar from "./SideBar";
import OpponentCam from "./OpponentCam";
import axios from 'axios';

class GameRoom extends React.Component {
    state = {
        userIsActive: false,
        activeJoke: {
            joke: '',
            answer: '',
            category: 'none',
        },
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
              console.log(response.data)
              ;
          })
          .catch(err => {
              console.log(err.message)
          })
    }

    getChuckJoke = () => {
        axios
          .get('/chuckapi', {
              method: 'get',
              params: { hello: 'world' }
          })
          .then(res =>
              console.log(res.data[0])
          )
          .catch(err =>
              console.log(err.message)
          )
    }

    componentDidMount = () => {
        this.getChuckJoke()
        this.getRandomJoke()
    }


    render = () => {
        return (
            <div style={this.styles.container} >
                <OpponentCam
                    toggleActivity={this.toggleActivity}
                    activeJoke={this.state.activeJoke}

                />
                <SideBar
                    userIsActive={this.state.userIsActive}
                    getRandomJoke={this.getRandomJoke}
                />
            </div>
        )
    }
}


export default GameRoom;
