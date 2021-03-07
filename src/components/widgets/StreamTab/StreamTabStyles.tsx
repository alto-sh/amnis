import { css } from "emotion";

const Styles = {
    tabStyles: css`
        border-radius: .7rem;
        padding: 15px;  
        font-family: Poppins, sans-serif;
        transition: all .25s;
        margin-bottom: 10px;
        width: 100%;
        border: none;
        text-align: left;

        &:hover {
            cursor: pointer;
            transform: scale(1.04);
        }
    `,
    tabDark: css`
        background: rgba(255, 255, 255, 0.1);
    `,
    tabLight: css`
        background: whitesmoke;
        color: black;
    `
}

export default Styles;