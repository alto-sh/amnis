import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import StreamSpace from "./components/pages/StreamSpace/StreamSpace";
import WelcomePage from "./components/pages/WelcomePage/WelcomePage";

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
                    <Route path="/"                 component={ WelcomePage } exact/>
                    <Route path="/space"            component={ StreamSpace } exact/>
                </Switch>
            </BrowserRouter>
        )
    }
}