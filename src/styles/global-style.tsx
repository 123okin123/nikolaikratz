import { createGlobalStyle } from 'styled-components';
import { media } from 'styled-bootstrap-grid';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Poppins', sans-serif;
  color: rgb(29, 29, 31);
}
p {
  line-height: 1.5;
}

h1 {
  font-weight: 800;
  ${media.xs`
    font-size: 3em;
  `}

  ${media.sm`
  font-size: 4em;
  `}
  ${media.md`
  font-size: 4.5em;
  `}
}

h2 {
  font-weight: 300;
  ${media.xs`
  font-size: 1.7em;
  `}
  ${media.sm`
  font-size: 2.2em;
  `}
  ${media.md`
  font-size: 2.4em;
  `}
}
h3 {
  font-weight: 600;
  ${media.xs`
  font-size: 1.6em;
  `}
  ${media.sm`
  font-size: 1.8em;
  `}
  ${media.md`
  font-size: 2em;
  `}
}

h5, h6 {
  ${media.xs`
  font-size: 1.5em;
  `}
  ${media.sm`
  font-size: 2em;
  `}
  ${media.md`
  font-size: 2.5em;
  `}
}
`;
