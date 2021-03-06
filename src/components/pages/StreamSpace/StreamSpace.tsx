import React from "react";
import { withRouter } from "react-router";

import { Container, Row, Col, Button } from "react-bootstrap";

import Template from "../Template/Template";
import ThoughtStyles from "./StreamSpaceStyles";

import { cx } from "emotion";
import Styles from "./StreamSpaceStyles";
import StreamTab from "../../widgets/StreamTab/StreamTab";
import ThoughtBox from "../../widgets/ThoughtBox/ThoughtBox";

import netlifyIdentity from "netlify-identity-widget";

type Props = {};
type State = {
    dark: boolean
};

export default class StreamSpace extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            dark: true
        }

        //@ts-expect-error
        const id = this.props.match.params.id;
        console.log(id);

        // Method Bindings
        this.toggleDarkMode = this.toggleDarkMode.bind(this);

        this.initializeAuth();
    }

    initializeAuth() {
        netlifyIdentity.init();

        netlifyIdentity.on('logout', () => {
            console.log("Well, I logged out...");
            window.location.href = window.location.origin;
        });

        const user = netlifyIdentity.currentUser();

        if(!user) window.location.href = window.location.origin;
        else console.log(user);
    }

    toggleDarkMode() {
        this.setState({ dark: !this.state.dark });
    }
 
    render() {

        return (
            <Template dark={this.state.dark} toggleDarkMode={this.toggleDarkMode}>              
                <Row>
                    <Col sm={3}>
                        {/* Log Out Button */}
                        <div className={cx( Styles.logoutButton )} onClick={() => { netlifyIdentity.logout(); }}>
                            Log Out
                        </div>
                        {/* Map Stream Tabs Here */}
                        <StreamTab dark={this.state.dark}/>
                        {/* New Stream Button */}
                        <div className={cx( Styles.newStreamButton )}>
                            🖊&nbsp;&nbsp;New Stream
                        </div>
                    </Col>
                    <Col sm={9}>
                        <ThoughtBox dark={this.state.dark}/>
                    </Col>
                </Row>
            </Template>
        );
    }
}