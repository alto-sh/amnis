import { css } from "emotion";

const Styles = {
    thoughtBox: css`
        border-radius: .7rem;
        padding: 20px;
        height: 72vh;
        overflow-x: hidden;

        ::-webkit-scrollbar {
            width: 10px;
            transition: 0.2s;
        }
        ::-webkit-scrollbar-track {
            /* background: rgba(0, 0, 0, 0.5); */
            background:rgb(102,102,102);
            /* border-radius: 10px; */
            transition: 0.1s;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.2);
            /* background:rgb(102,102,102); */
            /* border-radius: 10px; */
            transition: 0.1s;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 0, 0, 0.4);
            /* background:rgb(102,102,102); */
        }

    `,
    thoughtBoxDark: css`
        background: rgba(255, 255, 255, 0.1);
        color: white;
    `,
    thoughtBoxLight: css`
        background: whitesmoke;
        color: black;
    `,
    pickStream: css`
        /* background: red; */
        height:100%;
        text-align: center;

        span {
            position: relative;
            top: 43%;
            display: block;
            margin-left: auto;
            margin-right: auto;
            font-size: 2em;
        }
    `
}

export default Styles;