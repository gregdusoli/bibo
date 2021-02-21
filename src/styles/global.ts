import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  body {
    background-color: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};

      ${props => props.theme.name === 'dark' && css`
        img {
          filter: brightness(0.9);
        }
    `}

    div.card {
      background-color: ${props => props.theme.colors.card};
    }
  }

  @media (prefers-color-scheme: ${props => props.theme.name}) {
    body {
      background-color: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};

      ${props => props.theme.name === 'dark' && css`
        img {
          filter: brightness(0.9);
        }
      `}

      div.card {
        background-color: ${props => props.theme.colors.card};
      }
    }
  }
`
