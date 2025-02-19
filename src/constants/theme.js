import { Dimensions } from 'react-native';
// import themes from '../../assets/themes'
const { width, height } = Dimensions.get('window');

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const COLORS = {
    white: '#ffffff',
    offwhite: '#F3F3F3',
    black: "#000000",
    primary: "#272662",
    secondary: "#063A4F",
    sky: "#F1FAF9",
    orange: "#ff7040",
    secondary: "#00caf2",
    green: "#47cc49",
    green2: "#038654",
    gray: '#EFF2F7',
    chocolate: '#5d5c6c',
    chocolateBackground: '#CECFCD',
    grey2: '#f6f5fa',
    grey3: '#efefef',
    gray4: '#B4B5B5',
    red: 'red',
};

export const SIZES = {
    //global sizes
    base: screenHeight * 0.01,
    font: screenHeight * 0.0175,
    radius: 5,
    padding: screenHeight * 0.03,

    // font sizes
    navTitle: screenHeight * 0.04375,
    h1: screenHeight * 0.0375,
    h2: screenHeight * 0.0275,
    h2a: screenHeight * 0.034,
    h2c: screenHeight * 0.0245,
    h3: screenHeight * 0.0225,
    h3a: screenHeight * 0.0235,
    h4: screenHeight * 0.0175,
    h5: screenHeight * 0.015,
    body1: screenHeight * 0.0355,
    body2: screenHeight * 0.025,
    body3: screenHeight * 0.02,
    body3a: screenHeight * 0.02,
    body3b: screenHeight * 0.022,
    body4: screenHeight * 0.0175,
    body5: screenHeight * 0.015,
    body6: screenHeight * 0.01,
    intro: screenHeight * 0.04,

    // app dimensions
    width,
    height,
};

export const FONTS = {
    navTitle: {
        fontFamily: 'Satoshi-Bold', fontSize: SIZES.navTitle,
        color: "#000000",
    },
    largeTitleBold: {
        fontFamily: 'Satoshi-Bold',
        fontSize: SIZES.h1 * 1.1,
        fontWeight: 'bold',
        lineHeight: screenHeight * 0.05,
        color: "#000000",
    },
    h1: {
        fontFamily: 'Satoshi-Bold',
        fontSize: SIZES.h1,
        lineHeight: screenHeight * 0.05,
        color: "#000000",
    },
    h1a: {
        fontFamily: 'Satoshi-Bold',
        fontSize: SIZES.h1 * 0.9,
        lineHeight: screenHeight * 0.05,
        color: "#000000",
    },
    h2: {
        fontFamily: 'Satoshi-Bold',
        fontSize: SIZES.h2,
        lineHeight: screenHeight * 0.0375,
        color: "#000000",
    },
    h3: {
        fontFamily: 'Satoshi-Bold',
        fontSize: SIZES.h3,
        lineHeight: screenHeight * 0.025,
        color: "#000000",
    },
    h3a: {
        fontFamily: 'Satoshi-Bold',
        fontSize: SIZES.h3a,
        lineHeight: screenHeight * 0.025,
        color: "#000000",
    },
    h4: {
        fontFamily: 'Satoshi-Bold',
        fontWeight: 'bold',
        fontSize: SIZES.h4,
        lineHeight: screenHeight * 0.025,
        color: "#000000",
    },
    h5: {
        fontFamily: 'Satoshi-Bold',
        fontSize: SIZES.h5,
        lineHeight: screenHeight * 0.025,
        color: "#000000",
    },
    body: {
        fontFamily: 'Satoshi-Regular',
        fontSize: SIZES.body1 * 1.2,
        lineHeight: 39,
        color: "#000000",
    },
    body1: {
        fontFamily: 'Satoshi-Regular',
        fontSize: SIZES.body1,
        lineHeight: 36,
        color: "#000000",
    },
    body2: {
        fontFamily: 'Satoshi-Regular',
        fontSize: SIZES.body2,
        lineHeight: 30,
        color: "#000000",
    },
    body2a: {
        fontFamily: 'Satoshi-Regular',
        fontSize: SIZES.body2 * 0.95,
        lineHeight: 30,
        color: "#000000",
    },
    body2b: {
        fontFamily: 'Satoshi-Regular',
        fontSize: SIZES.body2 * 0.935,
        lineHeight: 30,
        color: "#000000",
    },
    body2c: {
        fontFamily: 'Satoshi-Regular',
        fontSize: SIZES.body2 * 1.3,
        lineHeight: 30,
        color: "#000000",
    },
    body3: {
        fontFamily: 'Satoshi-Regular',
        fontSize: SIZES.body3 * 1.05,
        lineHeight: 22,
        color: "#000000",
    },
    body3a: {
        fontFamily: 'Satoshi-Regular',
        fontSize: SIZES.body3a,
        lineHeight: 22,
        color: "#000000",
    },
    body3b: {
        fontFamily: 'Satoshi-Regular',
        fontSize: SIZES.body3b,
        lineHeight: 22,
        color: "#000000",
    }, body3c: {
        fontFamily: 'Satoshi-Regular',
        fontSize: SIZES.body3a * 0.88,
        lineHeight: 22,
        color: "#000000",
    },
    body4: {
        fontFamily: 'Satoshi-Regular',
        fontSize: SIZES.body4,
        lineHeight: 22,
        color: "#000000",
    },
    body4b: {
        fontFamily: 'Satoshi-Regular',
        fontSize: SIZES.body4 * 0.9,
        lineHeight: 22,
        color: "#000000",
    },
    body5: {
        fontFamily: 'Satoshi-Regular',
        fontSize: SIZES.body5,
        lineHeight: 22,
        color: "#000000",
    },
    body6: {
        fontFamily: 'Satoshi-Regular',
        fontSize: SIZES.body6,
        lineHeight: 22,
        color: "#000000",
    },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;