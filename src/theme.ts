import { DefaultTheme } from 'styled-components';
import { ThemeType } from './types';

export const DarkMode = { isDark: true };

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const colors = {
  skyBlue: '#069ccd',
  whiteGray: '#f7f6f3',
  dusk: 'rgb(65,77,107)',
  green: 'rgb(29,211,168)',
  greenBlue: 'rgb(36,205,151)',
  mediumGray: 'rgb(134,154,183)',
  paleGray: 'rgb(221,226,236)',
  lightBackground: 'white',
  lightBackgroundLight: '#EAEBF4',
  darkBackground: '#232323',
  darkBackgroundLight: '#2C2C2C',
  lightWhite: '#EAEBF4',
  accentLight: '#393D7A',
  accentLightDark: '#8A96DC',
  accent: '#B446BF',
  accentDark: '#B290B7',
  btnPrimary: '#02C8A3',
  btnPrimaryDark: '#00BA90',
  blackLight: '#232323',
  lightBlack: '#2C2C2C',
  lightGray: '#40444F',
  whiteLight: '#EDEDED',
  lightW: '#D3D8E8',
};

const light = {
  background: 'white',
  subBackground: colors.lightWhite,
  footerBackground: colors.lightGray,
  btnPrimary: colors.btnPrimary,
  btnPrimaryFont: 'white',
  btnPrimaryLight: 'white',
  btnPrimaryLightFont: 'black',
  fontColor: 'black',
  colorAccentLight: colors.accentLight,
  colorAccent: colors.accent,
  btnGradient: `linear-gradient(
    to right,
    ${colors.accentLight},
    ${colors.accent})`,
  itemBackground: 'white',
  itemBorder: colors.whiteLight,
  itemBorderTransparent: colors.whiteLight,
  iconHover: colors.accent,
};

export type Theme = typeof light;

const dark = {
  background: colors.blackLight,
  subBackground: colors.lightBlack,
  footerBackground: colors.blackLight,
  btnPrimary: colors.btnPrimary,
  btnPrimaryFont: 'white',
  btnPrimaryLight: colors.lightW,
  btnPrimaryLightFont: colors.lightW,
  fontColor: 'white',
  colorAccentLight: colors.accentLightDark,
  colorAccent: colors.accentDark,
  btnGradient: `linear-gradient(
    to right,
    ${colors.accentLightDark},
    ${colors.accentDark}`,
  itemBackground: colors.lightBlack,
  itemBorder: 'white',
  itemBorderTransparent: 'rgba(255, 255, 255, 0)',
  iconHover: colors.accentLightDark,
};

const theme = {
  light,
  dark,
};

export const createTheme = (type = ThemeType.LIGHT): DefaultTheme => {
  switch (type) {
    case ThemeType.LIGHT:
      DarkMode.isDark = false;
      return theme.light;
    case ThemeType.DARK:
      DarkMode.isDark = true;
      return theme.dark;
  }
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
