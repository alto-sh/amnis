import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Styles from "./AppStyles";

type State = {};
type Props = {};

export default class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }
 
    render() {

        const sendChat = (msgDOM:any) => {
            console.log(msgDOM.value);
        }

        return (
            <BrowserRouter>
                <Switch>
                    {/* Paths */}
                    <Route path="/"     component={ () => { return (

                    // <div className="background">
                    //     <div className="ideasContainer">
                    //         <ul className="ideas">
                    //             <li>1</li>
                    //             <li>2</li>
                    //             <li>3</li>
                    //         </ul>
                    //     </div>
                    // </div>

                    <div className={Styles.background}>
                        <div className={Styles.container}>
                            <div className={Styles.ideasContainer}>
                                <ul className={Styles.ideas}>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                </ul>
                                <div className={Styles.chatContainer}>
                                    <div className={Styles.chat}>
                                        
                                    </div>
                                    <div className={Styles.submitChat}>
                                        <span className={Styles.inputContainer}>
                                            <input id="chatInput" type="text" required/>
                                            <button onClick={() => {
                                                sendChat(document.getElementById("chatInput"))
                                            }}>Send</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ); } } exact/>
                </Switch>
            </BrowserRouter>
        )
    }
}