import { css } from "emotion";

const Styles = {
    amnisButton: css`
        border-radius: 1rem;
        transition: all .25s;
        display: block;
        width: 100%;
        padding: 18px 0px;
        font-size: 18pt;

        &:hover {
            transform: scale(1.04);
        }

        &, &:hover, &:active {
            box-shadow: none !important;
            outline: 0 !important;
        }
    `,
    positiveButton: css`
        &, &:hover, &:active {
            background: var(--orange) !important;
            border-color: var(--orange) !important;
            color: white !important;
        }
    `,
    negativeButton: css`
        &, &:hover, &:active {
            background: var(--red) !important;
            border-color: var(--red) !important;
            color: white !important;
        }
    `
}

export default Styles;