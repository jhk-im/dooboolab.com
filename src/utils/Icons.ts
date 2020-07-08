import icCoupang from '../../assets/icons/ic-coupang.png';
import icDoobooUi from '../../assets/icons/ic-dooboo-ui-logo.png';
import icDooboolab from '../../assets/icons/ic-dooboolab-logo.png';
import icFacebookW from '../../assets/icons/ic-facebook-white.png';
import icFacebookW2x from '../../assets/icons/ic-facebook-white@2x.png';
import icFacebookW3x from '../../assets/icons/ic-facebook-white@3x.png';
import icGoogleW from '../../assets/icons/ic-google-white.png';
import icGoogleW2x from '../../assets/icons/ic-google-white@2x.png';
import icGoogleW3x from '../../assets/icons/ic-google-white@3x.png';
import icGraphqlSeoul from '../../assets/icons/ic-graphql-seoul.png';
import icHackatalk from '../../assets/icons/ic-hackatalk-logo.png';
import icLunaSoft from '../../assets/icons/ic-lunasoft.png';
import icMegazone from '../../assets/icons/ic-megazone.png';
import icPrime from '../../assets/icons/ic-prime-logo.png';
import icReactNativeSeoul from '../../assets/icons/ic-react-native-seoul.png';
import icTuring from '../../assets/icons/ic-turing.png';

const isRetina = (first: string, second?: string, third?: string): string => {
  if (window.devicePixelRatio >= 1 && third) {
    return third;
  }
  if (window.devicePixelRatio >= 0.5 && second) {
    return second;
  }
  return first;
};

export const IC_FACEBOOK_W = isRetina(
  icFacebookW,
  icFacebookW2x,
  icFacebookW3x,
);

export const IC_GOOGLE_W = isRetina(icGoogleW, icGoogleW2x, icGoogleW3x);

export const IC_DOOBOOLAB_LOGO = icDooboolab;
export const IC_GRAPHQLSEOUL = icGraphqlSeoul;
export const IC_REACTNATIVESEOUL = icReactNativeSeoul;
export const IC_COUPANG = icCoupang;
export const IC_LUNASOFT = icLunaSoft;
export const IC_MEGAZONE = icMegazone;
export const IC_TURING = icTuring;
export const IC_PRIME = icPrime;
export const IC_DOOBOO_UI = icDoobooUi;
export const IC_HACKATALK = icHackatalk;
