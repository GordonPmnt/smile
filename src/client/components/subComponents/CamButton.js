import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import { colors } from '../styles/ThemeContext';


const useStyles = makeStyles({
    buttonOn: {
        backgroundColor : 'transparent',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.05)',
        position: 'absolute',
        marginLeft: '16%',
        marginTop: '-4%',
        cursor: 'pointer',
        height: '2.7em',
        width: '2.7em',
        border: 'solid 1px white',
        borderRadius: '100%',
        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
            "&:hover": {
            backgroundColor: colors.transparent,
            boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
        },
    },
    buttonOff: {
        backgroundColor : colors.red,
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.05)',
        position: 'absolute',
        marginLeft: '16%',
        marginTop: '-4%',
        cursor: 'pointer',
        height: '2.7em',
        width: '2.7em',
        border: `solid 1px ${colors.red}`,
        borderRadius: '100%',
        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
        "&:hover": {
            backgroundColor : 'red',
            boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
        },
    },
    text: {
        display: 'flex',
        color: 'white',
        margin: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
})

const CamButton = ({ toggleVideo, videoEnabled }) => {
    const classes = useStyles();

    return (
        <>
            {videoEnabled
            ?
                <div onClick={() => toggleVideo()} className={classes.buttonOn}>
                    <p className={classes.text}><VideocamIcon /></p>
                </div>
            :
                <div onClick={() => toggleVideo()} className={classes.buttonOff}>
                    <p className={classes.text}><VideocamOffIcon /></p>
                </div>
            }
        </>
    )
}

export default CamButton;


