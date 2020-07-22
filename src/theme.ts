import { DefaultTheme } from 'styled-components';
import { ThemeType } from './types';
import icCoupang from '../assets/icons/ic-coupang.png';
import icCoupangDark from '../assets/icons/ic-coupang-dark.png';
import icDoobooUi from '../assets/icons/ic-dooboo-ui-logo.png';
import icDoobooUiDark from '../assets/icons/ic-dooboo-ui-logo-dark.png';
import icDooboolabLogo from '../assets/icons/ic-dooboolab-logo.png';
import icDooboolabLogoDark from '../assets/icons/ic-dooboolab-logo-dark.png';
import icHackatalk from '../assets/icons/ic-hackatalk-logo.png';
import icHackatalkDark from '../assets/icons/ic-hackatalk-logo-dark.png';
import icLunaSoft from '../assets/icons/ic-lunasoft.png';
import icLunaSoftDark from '../assets/icons/ic-lunasoft-dark.png';
import icMegazone from '../assets/icons/ic-megazone.png';
import icMegazoneDark from '../assets/icons/ic-megazone-dark.png';
import icPrime from '../assets/icons/ic-prime-logo.png';
import icPrimeDark from '../assets/icons/ic-prime-logo-dark.png';
import icTuring from '../assets/icons/ic-turing.png';
import icTuringDark from '../assets/icons/ic-turing-dark.png';
import toggle from '../assets/svg/toggle-light.svg';
import toggleButton from '../assets/svg/toggle-button-light.svg';
import toggleButtonDark from '../assets/svg/toggle-button-dark.svg';
import toggleDark from '../assets/svg/toggle-dark.svg';
import toggleIcon from '../assets/svg/toggle-icon-light.svg';
import toggleIconDark from '../assets/svg/toggle-icon-dark.svg';
import toggleRact from '../assets/svg/toggle-ract-light.svg';
import toggleRactDark from '../assets/svg/toggle-ract-dark.svg';

export const Icon = {
  logo: icDooboolabLogo,
  works: [],
  sponsor: [],
  toggle: [],
  toggle_darkMode: null,
};

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
};

const light = {
  background: 'white',
  subBackground: '#EAEBF4',
  footerBackground: '#40444F',
  btnPrimary: '#02C8A3',
  btnPrimaryFont: 'white',
  btnPrimaryLight: 'white',
  btnPrimaryLightFont: 'black',
  fontColor: 'black',
  colorAccentLight: '#393D7A',
  colorAccent: '#B446BF',
  btnGradient: `linear-gradient(
    to right,
    ${'#393D7A'},
    ${'#B446BF'})`,
  itemBackground: 'white',
  itemBorder: '#EDEDED',
  itemBorderTransparent: '#EDEDED',
  iconHover: '#B446BF',
  itemBox: '#EDEDED',
};

export type Theme = typeof light;

const dark = {
  background: '#232323',
  subBackground: '#2C2C2C',
  footerBackground: '#232323',
  btnPrimary: '#00BA90',
  btnPrimaryFont: 'white',
  btnPrimaryLight: '#D3D8E8',
  btnPrimaryLightFont: '#D3D8E8',
  fontColor: 'white',
  colorAccentLight: '#8A96DC',
  colorAccent: '#B290B7',
  btnGradient: `linear-gradient(
    to right,
    ${'#8A96DC'},
    ${'#B290B7'}`,
  itemBackground: '#2C2C2C',
  itemBorder: 'white',
  itemBorderTransparent: 'rgba(255, 255, 255, 0)',
  iconHover: '#8A96DC',
  itemBox: '#2C2C2C',
};

const theme = {
  light,
  dark,
};

export const createTheme = (type = ThemeType.LIGHT): DefaultTheme => {
  switch (type) {
    case ThemeType.LIGHT:
      Icon.logo = icDooboolabLogo;
      Icon.works = [icPrime, icDoobooUi, icHackatalk];
      Icon.sponsor = [icCoupang, icMegazone, icLunaSoft, icTuring];
      Icon.toggle = [toggleButton, toggleIcon, toggleRact];
      Icon.toggle_darkMode = toggle;
      return theme.light;
    case ThemeType.DARK:
      Icon.logo = icDooboolabLogoDark;
      Icon.works = [icPrimeDark, icDoobooUiDark, icHackatalkDark];
      Icon.sponsor = [icCoupangDark, icMegazoneDark, icLunaSoftDark, icTuringDark];
      Icon.toggle = [toggleButtonDark, toggleIconDark, toggleRactDark];
      Icon.toggle_darkMode = toggleDark;
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
