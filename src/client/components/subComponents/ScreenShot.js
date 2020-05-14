import React from "react";
import { makeStyles } from '@material-ui/core/styles';
//import littleScreenshots from './littleScreenshot';

const useStyles = makeStyles({
    imgStyles: {
            height: 'auto',
            maxWidth: '8vw', 
            transform: 'rotate(-0.05turn)', 
            border: 'solid 3px',
            borderColor: '#42B1EF',
            transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",
            "&:hover": {
            transform: "scale(1.6)",
            boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
            position: 'relative',
            zIndex: 100000,
        }
}})

const ScreenShot = ({ looserCapture }) => {
    const styles = {
        container: {
            height: '25vh',
            width: '9vw',
            paddingTop : '6vh',
            paddingBottom: '8vh',
            paddingRight: '2vh',
            textAlign: 'right',
            marginRight: '-6vw',
        },
    }

    const classes = useStyles();

    return (
        <div id="screenshot" style={styles.container} >
                <img src={looserCapture} alt="looser" className={classes.imgStyles} />
        </div>
    );
}

export default ScreenShot;