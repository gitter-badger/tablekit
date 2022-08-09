import {
  ThemeProvider as EmotionThemeProvider,
  Global,
  css
} from '@emotion/react';
import * as React from 'react';

import { ltrSupport } from '../themeVariables/ltrSupport';
import { theme as themeStyles } from '../themeVariables/theme';
import { typography } from '../themeVariables/typography';
import { resetCss } from '../utils/resetCss';

const globalStyles = css`
  // TODO add font-face from fontSettings
  ${resetCss};
  ${ltrSupport};
  ${themeStyles};
  ${typography};
`;

export function ThemeProvider({
  isRtl,
  lang,
  country,
  theme = 'light',
  children
}: {
  isRtl?: boolean;
  lang?: string;
  country?: string;
  theme?: 'light' | 'dark';
  children: React.ReactNode;
}): JSX.Element {
  React.useEffect(() => {
    if (lang) {
      document.documentElement.setAttribute('lang', lang);
    }
    if (country) {
      document.documentElement.dataset.country = country;
    }
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.dataset.theme = theme;
  }, [isRtl, lang, theme, country]);
  return (
    <EmotionThemeProvider
      theme={(parentTheme) => ({
        ...(parentTheme || {}),
        isRtl,
        isDark: theme === 'dark'
      })}
    >
      <Global styles={globalStyles} />
      {children}
    </EmotionThemeProvider>
  );
}
