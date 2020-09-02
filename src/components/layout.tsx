import React, { ReactElement } from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

export default function Layout({ children }:
{children: ReactElement[] | ReactElement}): ReactElement {
  return (
    <>
      <Normalize />
      <ThemeProvider theme={theme}>

        <div>
          {children}
        </div>
      </ThemeProvider>
    </>
  );
}
