import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import { colors } from '../styles/ThemeContext';


const useStyles = makeStyles({
    buttonOn: {
        backgroundColor : 'transparent',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.05)',
        position: 'absolute',
        marginLeft: '11%',
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
        marginLeft: '11%',
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

const MicroButton = ({ toggleMicro, microEnabled}) => {
    const classes = useStyles();

    return (
        <>
            {microEnabled
            ?
                <div onClick={() => toggleMicro()} className={classes.buttonOn}>
                    <p className={classes.text}><MicIcon /></p>
                </div>
            :
                <div onClick={() => toggleMicro()} className={classes.buttonOff}>
                    <p className={classes.text}><MicOffIcon /></p>
                </div>
            }
        </>
    );
}

export default MicroButton;