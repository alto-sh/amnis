import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Styles from "./AppStyles";

import Home from "./components/Pages/Home/Home";
import Thought from "./components/pages/Thought/Thought";

type State = {};
type Props = {};

export default class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }
 
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* Paths */}
                    <Route path="/"     component={ Home } exact/>
                    <Route path="/"     component={ () => { return (
                    <div className={Styles.background}>
                        <Thought />
                    </div>
                    ); } } exact/>
                </Switch>
            </BrowserRouter>
        )
    }
}