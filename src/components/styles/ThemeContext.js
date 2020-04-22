import React from 'react';


export const colors = {
    yellow: '#EEE577',
    lightYellow: '#EFEEC5',
    red: '#EF4141',
    lightRed: '#E5B2B2',
    blue: '#42B1EF',
    lightblue: '#BFDCEC',
    pink: '#DA4CB0',
    lightPink: '#F2E4EF',
    green: 'rgba(85, 185, 64)',
    none: 'rgba(255, 255, 255, 0.8)',
};

const camContainer = {
    margin: '5vh 3vh 5vh 3vh',
    height: '90vh',
    width: '64vw',
    display: 'flex',
    justifyContent: 'center',
    border: `solid 5px`,
};

export const themes = {
    none: {
        border: {
            ...camContainer,
            borderColor: colors.none,
        }
    },
    random: {
        border: {
            ...camContainer,
            borderColor: colors.yellow,
        }
    },
    dark: {
        border: {
            ...camContainer,
            borderColor: colors.red,
        }
    },
    sex: {
        border: {
            ...camContainer,
            borderColor: colors.pink,
        }
    },
    chuck: {
        border: {
            ...camContainer,
            borderColor: colors.blue,
        }
    },
  };
  
export const ThemeContext = React.createContext();