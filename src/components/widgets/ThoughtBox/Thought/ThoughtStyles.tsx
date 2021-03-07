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
    thoughtsContainer: css`
    `,
    grabbingCursor: css`
        cursor:grabbing;
    `,
    grabCursor: css`
        cursor:grab;
    `,
    optionsButton: css`
        .dropdown-toggle:before {
            content: none;
        }
    `,
    thoughtTrash: css`
        display: flex;
        justify-content: center;
        i {
            z-index: 1;
            cursor: pointer;
            margin-left: 1rem;
            /* color: rgba(255, 255, 255, 0.5); */
            background: #FBFAF5;
            transition: 0.1s;
            padding: 0.3rem .75rem;
            margin: 0.3rem;
            /* background: rgba(0, 0, 0, 0.5); */
            background: #343a40;
            display: flex;
            justify-content: center;
            width: 50px;
            /* border-radius: 3px; */
            border: .25rem #343a40 solid;
            font-size: 1rem;
        }
        i:hover {
            border: .25rem #171a1d solid;
            background: #1d2124;
            /* color: rgba(255, 255, 255, 0.8); */
        }
    `
}

export default Styles;