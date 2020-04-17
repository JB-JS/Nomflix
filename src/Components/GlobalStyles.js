import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
    html {
        font-size: 16px;
    }
    body {        
        background-color: rgba(20, 20, 20, 1);
        color: white;        
    }
`;

export default globalStyles;
