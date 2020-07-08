import React, { ReactElement } from 'react';
import { hydrate, render } from 'react-dom';

import RootProvider from './providers';
import SwitchNavigator from './components/navigation/SwitchNavigator';
import { createGlobalStyle } from 'styled-components';

const rootElement = document.getElementById('app') as HTMLElement;

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'avenir';
    src: url('../fonts/avenir-book.otf');
  }
  @font-face {
    font-family: 'avenir-bold';
    src: url('../fonts/avenir-black.otf');
  }
  @font-face {
    font-family: 'futura';
    font-style: bold;
    src: url('../fonts/futura-extra-black');
  }
  body{
    font-family: 'avenir','avenir-bold','futura';
  }
`;

const Component = (): ReactElement => (
  <RootProvider>
    <SwitchNavigator />
  </RootProvider>
);

const renderApp = (): void => {
  if (rootElement.hasChildNodes()) {
    hydrate(<Component />, rootElement);
  } else {
    render(<Component />, rootElement);
  }
};

renderApp();

/* eslint-disable */
if ((module as any).hot) {
  (module as any).hot.accept(['./components/navigation/SwitchNavigator'], () =>
    renderApp(),
  );
}
/* eslint-enable */
