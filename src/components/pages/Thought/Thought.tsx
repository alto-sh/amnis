import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ThoughtStyles from "./ThoughtStyles";

type State = {};
type Props = {};

export default class Thought extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }
 
    render() {

        const addThought = (msgDOM:any) => {
            console.log(msgDOM.value);
            let ul = document.createElement("ul");
            ul.innerHTML = (`<li>${new Date().toLocaleString()}</li><li>${msgDOM.value}</li>`);
            let container:any = document.getElementById("thoughtChat");
            console.log(container);
            container.appendChild(ul);
        }

        return (
            <>
                <div className={ThoughtStyles.container}>
                    <div className={ThoughtStyles.ideasContainer}>
                        <ul className={ThoughtStyles.ideas}>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                        <div className={ThoughtStyles.chatContainer}>
                            <div className={ThoughtStyles.chat}>
                                <div id="thoughtChat" className={ThoughtStyles.messagesContainer}>
                                    <ul><li>{new Date().toLocaleString()}</li><li>msg</li></ul>
                                </div>
                            </div>
                            <div className={ThoughtStyles.submitChat}>
                                <span className={ThoughtStyles.inputContainer}>
                                    <input id="chatInput" type="text" required/>
                                    <button onClick={() => {
                                        addThought(document.getElementById("chatInput"))
                                    }}>Send</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}