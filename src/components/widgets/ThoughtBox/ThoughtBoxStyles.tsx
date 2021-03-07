import { css } from "emotion";

const Styles = {
    thoughtBox: css`
        border-radius: .7rem;
        padding: 20px;
        height: 80vh;
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
    `
}

export default Styles;