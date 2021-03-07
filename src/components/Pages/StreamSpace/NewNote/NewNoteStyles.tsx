import { css } from "emotion";

const Styles = {
    newNoteStyles: css`
        font-family: Poppins, sans-serif;

        & h3 { padding: 10px; }

        & #new-note-input-field {
            padding: 30px;
            font-size: 14pt;
            border-radius: 1rem;
            border: 0;
            resize: none;
            height: 180pt;
        }

        & .form-text { padding: 10px; }
    `,
    newNoteDark: css`
        color: white;
        & #new-note-input-field {
            background: rgba(255, 255, 255, 0.1);
            color: white;
        }
    `,
    newNoteLight: css`
        color: black;
        & #new-note-input-field {
            background: whitesmoke;
        }
    `
}

export default Styles;