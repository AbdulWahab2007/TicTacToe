import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(to bottom left, #196fe7, #1d4680);
        color: white;
        margin: 0px;
        width: 100%;
        height: 100vh;
    }
`

export default GlobalStyle;