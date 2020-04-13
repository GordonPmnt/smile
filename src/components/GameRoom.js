import React from "react";
import SideBar from "./SideBar";
import OpponentCam from "./OpponentCam";
import { findByLabelText } from "@testing-library/react";
import { findRenderedComponentWithType } from "react-dom/test-utils";


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
        <div style={styles.container}>
            <OpponentCam />
            <SideBar />
        </div>
    );
}