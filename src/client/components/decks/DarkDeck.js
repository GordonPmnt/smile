import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../styles/ThemeContext';


const useStyles = makeStyles({
    card: {
        borderRadius: '5px',
        border: `${colors.red} 10px solid`,
        backgroundColor: colors.lightRed,
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

const DarkDeck = ({ getDarkJoke }) => {
    const styles = {
        label: {
            fontSize: '0.8rem',
            textAlign: 'center',
        },
        daddy: {
            width: '1.8em',
            marginBottom: '10px',
            opacity: '0.7',
        }
    }
    const daddy = require('../../img/evil-transparent.png')
    const classes = useStyles();

    return (
        <div className={classes.card} onClick={() => getDarkJoke && getDarkJoke()}>
            <p style={styles.label}>HUMOUR NOIR...</p>
            <img 
                src={daddy} 
                alt="random joke daddy" 
                style={styles.daddy}
            />
        </div>
    );
}

export default DarkDeck;







