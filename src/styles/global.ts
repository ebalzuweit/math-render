import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
		background: #dedede;
		color: black;
    }
    #root {
		width: 100%;
		height: 100%;
        margin: 0;
		padding: 0;
    }
 `

export default GlobalStyle