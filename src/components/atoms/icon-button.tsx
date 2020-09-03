import { Link, GatsbyLinkProps } from 'gatsby';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

export const IconButton = ({ children, ref, ...rest }: GatsbyLinkProps<any>): ReactElement => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled(Link)`
  padding: 10px;
  font-size: 2em;
  line-height: 0;
`;
