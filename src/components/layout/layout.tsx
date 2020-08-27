import React, { ReactElement } from 'react';

export default function Layout({ children }:
{children: ReactElement[] | ReactElement}): ReactElement {
  return (
    <div className="">
      {children}
    </div>
  );
}
