import React, { ReactElement } from 'react';
import { BaseCSS } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from '../styles/global-style';
import { theme } from '../styles/theme';

export default function Layout({
  children
}: {
  children: ReactElement[] | ReactElement;
}): ReactElement {
  return (
    <>
      <Normalize />
      <BaseCSS />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div>{children}</div>
      </ThemeProvider>
    </>
  );
}
