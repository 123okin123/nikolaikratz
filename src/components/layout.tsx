import React, { ReactElement } from 'react';
import { Normalize } from 'styled-normalize';

export default function Layout({ children }:
{children: ReactElement[] | ReactElement}): ReactElement {
  return (
    <>
      <Normalize />
      <div>
        {children}
      </div>
    </>
  );
}
