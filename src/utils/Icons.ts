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
import icReactNativeSeoul from '../../assets/icons/ic-react-native-seoul.png';
import icSmalie from '../../assets/icons/ic-smile.png';

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

export const IC_FACEBOOK_W = isRetina(
  icFacebookW,
  icFacebookW2x,
  icFacebookW3x,
);

export const IC_GOOGLE_W = isRetina(icGoogleW, icGoogleW2x, icGoogleW3x);
export const IC_GRAPHQLSEOUL = icGraphqlSeoul;

export const IC_REACTNATIVESEOUL = icReactNativeSeoul;
export const IC_SMILE = icSmalie;
