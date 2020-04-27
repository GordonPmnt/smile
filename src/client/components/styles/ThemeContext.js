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
        },
        logo: require('../../img/gentleman-transparent.png')
    },
    random: {
        borderColor: {
            borderColor: colors.yellow,
        },
        logo: require('../../img/mexicano-transparent.png')
    },
    dark: {
        borderColor: {
            borderColor: colors.red,
        },
        logo: require('../../img/evil-transparent.png')
    },
    sex: {
        borderColor: {
            borderColor: colors.pink,
        },
        logo: require('../../img/sex-moustache-trans.png')
    },
    chuck: {
        borderColor: {
            borderColor: colors.blue,
        },
        logo: require('../../img/cop-transparent.png')
    },
};
  
export const ThemeContext = React.createContext();