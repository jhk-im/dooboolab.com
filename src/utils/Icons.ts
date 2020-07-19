import icCoupang from '../../assets/icons/ic-coupang.png';
import icCoupangDark from '../../assets/icons/ic-coupang-dark.png';
import icDoobooUi from '../../assets/icons/ic-dooboo-ui-logo.png';
import icDoobooUiDark from '../../assets/icons/ic-dooboo-ui-logo-dark.png';
import icDooboolabLogo from '../../assets/icons/ic-dooboolab-logo.png';
import icDooboolabLogoDark from '../../assets/icons/ic-dooboolab-logo-dark.png';
import icFacebookW from '../../assets/icons/ic-facebook-white.png';
import icFacebookW2x from '../../assets/icons/ic-facebook-white@2x.png';
import icFacebookW3x from '../../assets/icons/ic-facebook-white@3x.png';
import icGoogleW from '../../assets/icons/ic-google-white.png';
import icGoogleW2x from '../../assets/icons/ic-google-white@2x.png';
import icGoogleW3x from '../../assets/icons/ic-google-white@3x.png';
import icGraphqlSeoul from '../../assets/icons/ic-graphql-seoul.png';
import icHackatalk from '../../assets/icons/ic-hackatalk-logo.png';
import icHackatalkDark from '../../assets/icons/ic-hackatalk-logo-dark.png';
import icLunaSoft from '../../assets/icons/ic-lunasoft.png';
import icLunaSoftDark from '../../assets/icons/ic-lunasoft-dark.png';
import icMegazone from '../../assets/icons/ic-megazone.png';
import icMegazoneDark from '../../assets/icons/ic-megazone-dark.png';
import icPrime from '../../assets/icons/ic-prime-logo.png';
import icPrimeDark from '../../assets/icons/ic-prime-logo-dark.png';
import icReactNativeSeoul from '../../assets/icons/ic-react-native-seoul.png';
import icSmalie from '../../assets/icons/ic-smile.png';
import icTuring from '../../assets/icons/ic-turing.png';
import icTuringDark from '../../assets/icons/ic-turing-dark.png';

const isRetina = (first: string, second?: string, third?: string): string => {
  if (window.devicePixelRatio >= 1 && third) {
    return third;
  }
  if (window.devicePixelRatio >= 0.5 && second) {
    return second;
  }
  return first;
};

const isDarkMode = (darkPath: string, lightPath: string): string => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return darkPath;
  } else {
    return lightPath;
  }
};

const isDarkModePaths = (darkPaths: string[], lightPaths: string[]): string[] => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return darkPaths;
  } else {
    return lightPaths;
  }
};

export const IC_FACEBOOK_W = isRetina(
  icFacebookW,
  icFacebookW2x,
  icFacebookW3x,
);

export const IC_GOOGLE_W = isRetina(icGoogleW, icGoogleW2x, icGoogleW3x);

export const IC_DOOBOOLAB_LOGO = isDarkMode(icDooboolabLogoDark, icDooboolabLogo);

export const icWorks = [icPrime, icDoobooUi, icHackatalk];
export const icWorksDark = [icPrimeDark, icDoobooUiDark, icHackatalkDark];
export const IC_WORKS = isDarkModePaths(icWorksDark, icWorks);

export const IC_GRAPHQLSEOUL = icGraphqlSeoul;

export const IC_REACTNATIVESEOUL = icReactNativeSeoul;

export const IC_SMILE = icSmalie;

export const icSponsorDark = [icCoupangDark, icLunaSoftDark, icMegazoneDark, icTuringDark];
export const icSponsor = [icCoupang, icLunaSoft, icMegazone, icTuring];
export const IC_SPONSORS = isDarkModePaths(icSponsorDark, icSponsor);
