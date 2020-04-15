import React from "react";
import SideBar from "./SideBar";
import OpponentCam from "./OpponentCam";

class Status extends GameRoom {
    state = {
        isActive: 0
    };
    handleStatusChange = () => {
        const isActive = this.state.isActive
        this.setState({ isActive : false });
    };
    render() {
        return (
                <div>{this.state.isActive ? 'ACTIF' : 'INACTIF'}</div>
        )
        
    }
}

export default function GameRoom() {
    const styles = {
        container: {
            display: 'flex',
            backgroundColor: 'grey',
            height: '100vh',
            width: '100%',
            margin: '0px',
        },
    }
    return (
        <div style={styles.container}  className={Status} >
            <OpponentCam />
            <SideBar />
        </div>
    );
}

