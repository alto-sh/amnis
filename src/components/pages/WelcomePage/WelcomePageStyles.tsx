import { css } from "emotion";

const Styles = {
    horizontalCenter: css`
        display: table;
        margin-left: auto;
        margin-right: auto;
        min-height: 80vh;
    `,
    verticalCenter: css`
        display: table-cell;
        vertical-align: middle;
    `,
    welcomeCard: css`
        border-radius: 1rem;
        padding: 40px;
        font-family: Poppins, sans-serif;
        text-align: center;

        & h2 { font-weight: bold; }
        & p { color: #666 }
    `,
    welcomeCardDark: css`
        background: rgba(255, 255, 255, 0.1);
        color: white;
    `,
    welcomeCardLight: css`
        background: whitesmoke;
        color: black;
    `,
    particlesBg: css`
        width: 100%;
        height: 100%;
        position: fixed; !important
        z-index: -1;
        top: 0;
        left: 0;
    `
}

export default Styles;