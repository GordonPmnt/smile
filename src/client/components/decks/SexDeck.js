import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../styles/ThemeContext';


const useStyles = makeStyles({
    card: {
        borderRadius: '5px',
        border: `${colors.pink} 10px solid`,
        backgroundColor: colors.lightPink,
        height: '8.5rem',
        width: '5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
            "&:hover": {
            transform: "scale(1.04)",
            boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
        },
    },
})

const SexDeck = ({ getSexJoke }) => {
    const styles = {
        label: {
            fontSize: '0.8rem',
            textAlign: 'center',
        },
        daddy: {
            width: '2.3em',
            marginBottom: '10px',
            opacity: '0.7',
        }
    }
    const daddy = require('../../img/sex-moustache-trans.png')
    const classes = useStyles();

    return (
        <div className={classes.card} onClick={() => getSexJoke && getSexJoke()}>
            <p style={styles.label}>MELON {'&'} MELECHE</p>
            <img 
                src={daddy} 
                alt="random joke daddy" 
                style={styles.daddy}
            />
        </div>
    );
}

export default SexDeck;







