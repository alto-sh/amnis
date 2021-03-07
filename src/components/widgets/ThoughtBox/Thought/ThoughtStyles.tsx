import { css } from "emotion";

const Styles = {
    thoughtStyles: css`
        border-radius: 1rem;
        padding: 40px;
        transition: .25s;
        font-family: Poppins, sans-serif;
        margin: 10px;
        
        & h6 {
            margin-bottom: 20px;
        }

        &:hover {
            transform: scale(1.04);
        }
    `,
    thoughtDark: css`
        background: #0D1117;
        color: white;
    `,
    thoughtLight: css`
        background: #FBFAF5;
        color: black;
    `,
    thoughtBody: css`
        color: #666;
        font-size: 14pt;
    `,
    grabbingCursor: css`
        cursor:grabbing;
    `,
    grabCursor: css`
        cursor:grab;
    `
}

export default Styles;