import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media (max-width: 1160px) {
      font-size: 75%;
    }
  }

  body {
    font-family: 'Exo 2', sans-serif;
  }


`
