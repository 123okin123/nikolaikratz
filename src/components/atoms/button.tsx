import React, { ReactElement } from 'react';

interface ButtonProps {
  children: ReactElement | string
}

export default function Button({ children }: ButtonProps): ReactElement {
  return (
    <button type="button">
      {children}
    </button>
  );
}
