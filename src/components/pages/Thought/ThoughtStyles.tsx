import { css } from "emotion";

const ThoughtStyles = {
    
    // background: css`
    //     * {
    //         color: #F5F5F5;
    //     }
    //     background: #0D1117;
    //     height: 100vh;
    // `,
    container: css`
        display:flex;
        justify-content:center;
    `,
    ideasContainer: css`
        display: flex;
        position: absolute;
        transform: translate(-50%, -50%);
        top:50%;
        left:50%;
        align-content:center;
    `,
    ideas: css`
        background: #0D1117;
        li:first-child {
            margin-top: 0rem;
        }
        li {
            padding:1rem;
            margin:1rem;
            width: 10rem;
            background:rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            display: flex;
            justify-content: center;
        }
        li:last-child {
            background: #DC3545;
        }
    `,
    chatContainer: css`
    
    `
    ,
    submitChat: css`
        display: flex;
        justify-content:center;
        margin-top: 1rem;
    `
    ,
    inputContainer: css`
        input, button {
            border: none;
            background:rgba(255, 255, 255, 0.2);
            padding:1rem;
        }
        button {
            border-radius: 0px 10px 10px 0px;
        }
        input {
            border-radius: 10px 0px 0px 10px;
        }
    `
    ,
    chat: css`
        height:40rem;
        width: 30rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        overflow-y: auto;

    `,
    messagesContainer: css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        ul:first-child {
            margin-top:1rem;
        }
        ul:last-child {
            margin-bottom: 1rem;
        }
        ul {
            background: rgba(255, 255, 255, 0.1);
            margin: 0.5rem;
            padding: 1rem;
            border-radius: 10px;
            margin-top: 1rem;
            text-decoration: none;
            list-style: none;
            word-wrap: break-word;
        }
        li:first-child {
            color: rgba(255, 255, 255, 0.6);
        }

    `
}

export default ThoughtStyles;