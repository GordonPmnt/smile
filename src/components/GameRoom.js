import React from "react";
import SideBar from "./SideBar";
import OpponentCam from "./OpponentCam";

class GameRoom extends React.Component {
    state = {
        isActive: false
    };

    toggleActivity = () => {
        this.setState( prevState => ({
            isActive : !prevState.isActive
        }))
    };

    styles = {
        container: {
            display: 'flex',
            backgroundColor: 'grey',
            height: '100vh',
            width: '100%',
            margin: '0px',
        },
    }
    render() {
       // console.log("What is the state now ?", this.state.isActive)
        return (
                <div className={GameRoom} style={GameRoom.container} >
                    <button onClick={this.toggleActivity}>{this.state.isActive ? 'ACTIF' : 'INACTIF'}</button>
                    <OpponentCam />
                    <SideBar />
                </div>
        )
    }
}

export default GameRoom;