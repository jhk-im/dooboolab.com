import { DefaultTheme } from 'styled-components';
import { ThemeType } from './types';
import icCoupang from '../assets/icons/ic-coupang.png';
import icCoupang2x from '../assets/icons/ic-coupang@x2.png';
import icCoupang3x from '../assets/icons/ic-coupang@x3.png';
import icCoupangDark from '../assets/icons/ic-coupang-dark.png';
import icCoupangDark2x from '../assets/icons/ic-coupang-dark@x2.png';
import icCoupangDark3x from '../assets/icons/ic-coupang-dark@x3.png';
import icDoobooUi from '../assets/icons/ic-dooboo-ui-logo.png';
import icDoobooUi2x from '../assets/icons/ic-dooboo-ui-logo@x2.png';
import icDoobooUi3x from '../assets/icons/ic-dooboo-ui-logo@x3.png';
import icDoobooUiDark from '../assets/icons/ic-dooboo-ui-logo-dark.png';
import icDoobooUiDark2x from '../assets/icons/ic-dooboo-ui-logo-dark@x2.png';
import icDoobooUiDark3x from '../assets/icons/ic-dooboo-ui-logo-dark@x3.png';
import icDooboolabLogo from '../assets/icons/ic-dooboolab-logo.png';
import icDooboolabLogoDark from '../assets/icons/ic-dooboolab-logo-dark.png';
import icHackatalk from '../assets/icons/ic-hackatalk-logo.png';
import icHackatalk2x from '../assets/icons/ic-hackatalk-logo@x2.png';
import icHackatalk3x from '../assets/icons/ic-hackatalk-logo@x3.png';
import icHackatalkDark from '../assets/icons/ic-hackatalk-logo-dark.png';
import icHackatalkDark2x from '../assets/icons/ic-hackatalk-logo-dark@x2.png';
import icHackatalkDark3x from '../assets/icons/ic-hackatalk-logo-dark@x3.png';
import icLunaSoft from '../assets/icons/ic-lunasoft.png';
import icLunaSoft2x from '../assets/icons/ic-lunasoft@x2.png';
import icLunaSoft3x from '../assets/icons/ic-lunasoft@x3.png';
import icLunaSoftDark from '../assets/icons/ic-lunasoft-dark.png';
import icLunaSoftDark2x from '../assets/icons/ic-lunasoft-dark@x2.png';
import icLunaSoftDark3x from '../assets/icons/ic-lunasoft-dark@x3.png';
import icMegazone from '../assets/icons/ic-megazone.png';
import icMegazone2x from '../assets/icons/ic-megazone@x2.png';
import icMegazone3x from '../assets/icons/ic-megazone@x3.png';
import icMegazoneDark from '../assets/icons/ic-megazone-dark.png';
import icMegazoneDark2x from '../assets/icons/ic-megazone-dark@x2.png';
import icMegazoneDark3x from '../assets/icons/ic-megazone-dark@x3.png';
import icPrime from '../assets/icons/ic-prime-logo.png';
import icPrime2x from '../assets/icons/ic-prime-logo@x2.png';
import icPrime3x from '../assets/icons/ic-prime-logo@x3.png';
import icPrimeDark from '../assets/icons/ic-prime-logo-dark.png';
import icPrimeDark2x from '../assets/icons/ic-prime-logo-dark@x2.png';
import icPrimeDark3x from '../assets/icons/ic-prime-logo-dark@x3.png';
import icTuring from '../assets/icons/ic-turing.png';
import icTuring2x from '../assets/icons/ic-turing@x2.png';
import icTuring3x from '../assets/icons/ic-turing@x3.png';
import icTuringDark from '../assets/icons/ic-turing-dark.png';
import icTuringDark2x from '../assets/icons/ic-turing-dark@x2.png';
import icTuringDark3x from '../assets/icons/ic-turing-dark@x3.png';
import toggle from '../assets/svg/toggle-light.svg';
import toggleDark from '../assets/svg/toggle-dark.svg';

const isRetina = (first: string, second?: string, third?: string): string => {
  if (window.devicePixelRatio >= 1 && third) {
    return third;
  }
  if (window.devicePixelRatio >= 0.5 && second) {
    return second;
  }
  return first;
};

export const Icon = {
  logo: null,
  works: [],
  sponsor: [],
  toggle: [],
  toggle_darkMode: null,
};

const IC_COUPANG = isRetina(icCoupang, icCoupang2x, icCoupang3x);
const IC_COUPANG_DARK = isRetina(icCoupangDark, icCoupangDark2x, icCoupangDark3x);
const IC_TURING = isRetina(icTuring, icTuring2x, icTuring3x);
const IC_TURING_DARK = isRetina(icTuringDark, icTuringDark2x, icTuringDark3x);
const IC_MEGAZONE = isRetina(icMegazone, icMegazone2x, icMegazone3x);
const IC_MEGAZONE_DARK = isRetina(icMegazoneDark, icMegazoneDark2x, icMegazoneDark3x);
const IC_LUNASOFT = isRetina(icLunaSoft, icLunaSoft2x, icLunaSoft3x);
const IC_LUNASOFT_DARK = isRetina(icLunaSoftDark, icLunaSoftDark2x, icLunaSoftDark3x);
const IC_PRIME = isRetina(icPrime, icPrime2x, icPrime3x);
const IC_PRIME_DARK = isRetina(icPrimeDark, icPrimeDark2x, icPrimeDark3x);
const IC_DOOBOOUI = isRetina(icDoobooUi, icDoobooUi2x, icDoobooUi3x);
const IC_DOOBOOUI_DARK = isRetina(icDoobooUiDark, icDoobooUiDark2x, icDoobooUiDark3x);
const IC_HACKATALK = isRetina(icHackatalk, icHackatalk2x, icHackatalk3x);
const IC_HACKATALK_DARK = isRetina(icHackatalkDark, icHackatalkDark2x, icHackatalkDark3x);

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

// const colors = {
//   skyBlue: '#069ccd',
//   whiteGray: '#f7f6f3',
//   dusk: 'rgb(65,77,107)',
//   green: 'rgb(29,211,168)',
//   greenBlue: 'rgb(36,205,151)',
//   mediumGray: 'rgb(134,154,183)',
//   paleGray: 'rgb(221,226,236)',
//   lightBackground: 'white',
// };

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
      Icon.works = [IC_PRIME, IC_DOOBOOUI, IC_HACKATALK];
      Icon.sponsor = [IC_COUPANG, IC_MEGAZONE, IC_LUNASOFT, IC_TURING];
      Icon.toggle_darkMode = toggle;
      localStorage.setItem('isDarkMode', 'light');
      return theme.light;
    case ThemeType.DARK:
      Icon.logo = icDooboolabLogoDark;
      Icon.works = [IC_PRIME_DARK, IC_DOOBOOUI_DARK, IC_HACKATALK_DARK];
      Icon.sponsor = [IC_COUPANG_DARK, IC_MEGAZONE_DARK, IC_LUNASOFT_DARK, IC_TURING_DARK];
      Icon.toggle_darkMode = toggleDark;
      localStorage.setItem('isDarkMode', 'dark');
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
