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
  ${media.sm`{
    font-size: 3em;
  `}
  ${media.md`{
  font-size: 4em;
  `}
  ${media.lg`{
  font-size: 4.5em;
  `}
}

h2 {
  font-weight: 300;
  ${media.sm`{
  font-size: 1.7em;
  `}
  ${media.md`{
  font-size: 2.2em;
  `}
  ${media.lg`{
  font-size: 2.4em;
  `}
}
h3 {
  font-weight: 600;
  ${media.sm`{
  font-size: 1.6em;
  `}
  ${media.md`{
  font-size: 1.8em;
  `}
  ${media.lg`{
  font-size: 2em;
  `}
}

h5, h6 {
  ${media.sm`{
  font-size: 1.5em;
  `}
  ${media.md`{
  font-size: 2em;
  `}
  ${media.lg`{
  font-size: 2.5em;
  `}
}
`;
