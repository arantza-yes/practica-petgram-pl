import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit
}

body {
  padding: 0; 
  margin: 0;
  font-family: sans-serif;

}

h1, h2, h3, h4, h5, p {
  margin: 0;
}
a { 
  text-decoration: none;
}`
export default GlobalStyles
