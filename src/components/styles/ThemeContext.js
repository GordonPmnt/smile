import React from 'react';


export const colors = {
    yellow: '#EEE577',
    lightYellow: '#EFEEC5',
    red: '#EF4141',
    lightRed: '#E5B2B2',
    blue: '#42B1EF',
    lightBlue: '#BFDCEC',
    pink: '#DA4CB0',
    lightPink: '#F2E4EF',
    green: 'rgba(85, 185, 64)',
    none: 'rgba(255, 255, 255, 0.8)',
};

export const themes = {
    none: {
        borderColor: {
            borderColor: colors.none,
        }
    },
    random: {
        borderColor: {
            borderColor: colors.yellow,
        }
    },
    dark: {
        borderColor: {
            borderColor: colors.red,
        }
    },
    sex: {
        borderColor: {
            borderColor: colors.pink,
        }
    },
    chuck: {
        borderColor: {
            borderColor: colors.blue,
        }
    },
};
  
export const ThemeContext = React.createContext();