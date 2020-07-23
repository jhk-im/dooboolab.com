import {
  DefaultTheme,
  ThemeProvider as OriginalThemeProvider,
} from 'styled-components';
import React, { useState } from 'react';

import { ThemeType } from '../types';
import createCtx from '../utils/createCtx';
import { createTheme } from '../theme';

interface Context {
  theme: DefaultTheme;
  themeType: ThemeType;
  changeThemeType: () => void;
}
const [useCtx, Provider] = createCtx<Context>();

const isDarkMode = localStorage.getItem('isDarkMode');

export const defaultThemeType: ThemeType = isDarkMode === 'light' ? ThemeType.LIGHT : ThemeType.DARK;

interface Props {
  children?: React.ReactElement;
  // using initial ThemeType is essential while testing apps with consistent ThemeType
  initialThemeType?: ThemeType;
}

function ThemeProvider({
  children,
  initialThemeType = defaultThemeType,
}: Props): React.ReactElement {
  const [themeType, setThemeType] = useState(initialThemeType);
  const changeThemeType = (): void => {
    const newThemeType =
      themeType === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT;
    setThemeType(newThemeType);
  };
  const theme = createTheme(themeType);

  return (
    <Provider
      value={{
        changeThemeType,
        themeType,
        theme,
      }}
    >
      <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
    </Provider>
  );
}

export { useCtx as useThemeContext, ThemeProvider };
