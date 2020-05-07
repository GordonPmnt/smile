import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    button: {
        borderRadius: '100%',
        position: 'absolute',
        bottom: '10%',
        height: '5em',
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.05)',
        cursor: 'pointer',
        border: 'solid 3px',
        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
            "&:hover": {
            transform: "scale(1.04)",
            boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
        },
    },
})

const ScreenshotButton = ({ handleEndOfturn, theme, userIsActive }) => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
        },
    }
    const classes = useStyles();
    
    return (
        <div style={styles.container}>
            <img 
                src={require('../../img/cam-moustache.png')}
                alt="Screenshot button"
                onClick={userIsActive ? () => handleEndOfturn() : false} //here: should replace false by screenshot only 
                style={{...theme.borderColor}}
                className={classes.button}
            />
        </div>
    )
}

export default ScreenshotButton;