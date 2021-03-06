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

        const sendChat = (msgDOM:any) => {
            console.log(msgDOM.value);
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
                                
                            </div>
                            <div className={ThoughtStyles.submitChat}>
                                <span className={ThoughtStyles.inputContainer}>
                                    <input id="chatInput" type="text" required/>
                                    <button onClick={() => {
                                        sendChat(document.getElementById("chatInput"))
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