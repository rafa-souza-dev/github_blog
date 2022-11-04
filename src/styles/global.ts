import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }

  p {
    color: ${props => props.theme['base-text']}
  }
`
