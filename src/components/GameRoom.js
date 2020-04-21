import React from "react";
import SideBar from "./SideBar";
import OpponentCam from "./OpponentCam";

class GameRoom extends React.Component {
    state = {
        userIsActive: false
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
    
    render() {
        return (
                <div style={this.styles.container} >
                    <button onClick={this.toggleActivity}>{this.state.userIsActive ? 'ACTIF' : 'INACTIF'}</button>
                    <OpponentCam toggleActivity={this.toggleActivity} />
                    <SideBar />
                </div>
        )
    }
}

export default GameRoom;