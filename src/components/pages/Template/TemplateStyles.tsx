import { css } from "emotion";

const Styles = {
    template: css`
        min-height: 100vh;
        transition: all .25s;
    `,
    templateDark: css`
        background: #0D1117;
        color: white;
    `,
    templateLight: css`
        background: #FBFAF5;
        color: black;
    `,
    pageHeader: css`
        font-family: Poppins, sans-serif;
        font-weight: bold;
        font-size: 37pt;
        display: table;
        margin-left: auto;
        margin-right: auto;
        padding: 30px;
        transition: all 0.25s;

        &:hover {
            cursor: pointer;
            transform: scale(1.04);
        }
    `,
    containerStyles: css`
        width: 100%;
        height: 100%;
        max-width: 1200px;
        min-height: 80vh;
    `
}

export default Styles;