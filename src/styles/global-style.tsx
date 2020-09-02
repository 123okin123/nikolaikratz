import { createGlobalStyle } from 'styled-components';
import mediaHelper from 'styled-media-helper';

export const media = mediaHelper({
  sm: 320,
  md: 768,
  lg: 1240,
});

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Poppins', sans-serif;
  color: #333;
}

h1 {
  font-weight: 800;
  ${media.up('sm')} {
  font-size: 3em;
  }
  ${media.up('md')} {
  font-size: 4em;
  }
  ${media.up('lg')} {
  font-size: 4.5em;
  }
}

h2 {
  font-weight: 300;
  ${media.up('sm')} {
  font-size: 1.7em;
  }
  ${media.up('md')} {
  font-size: 2.2em;
  }
  ${media.up('lg')} {
  font-size: 2.4em;
  }
}
h3 {
  font-weight: 600;
  ${media.up('sm')} {
  font-size: 1.6em;
  }
  ${media.up('md')} {
  font-size: 1.8em;
  }
  ${media.up('lg')} {
  font-size: 2em;
  }
}

h5, h6 {
  ${media.up('sm')} {
  font-size: 1.5em;
  }
  ${media.up('md')} {
  font-size: 2em;
  }
  ${media.up('lg')} {
  font-size: 2.5em;
  }
}
`;
