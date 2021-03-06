import React from "react";

import { cx } from "emotion";
import Styles from "./WelcomePageStyles";
import Template from "../Template/Template";
import { Button } from "react-bootstrap";
import GlobalStyles from "../../GlobalStyles";

import netlifyIdentity from "netlify-identity-widget";

type Props = {};
type State = {
    dark?: boolean
};

export default class WelcomePage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            dark: false
        }

        // Method Bindings
        this.toggleDarkMode = this.toggleDarkMode.bind(this);

        this.initializeAuth();
    }

    initializeAuth() {
        netlifyIdentity.init();

        netlifyIdentity.on('login', (user) => {
            window.location.href = `${window.location.origin}/space?id=${user.id}`;
        });

        const user = netlifyIdentity.currentUser();
        if(user) window.location.href = `${window.location.origin}/space?id=${user.id}`;
    }
    
    toggleDarkMode() {
        this.setState({ dark: !this.state.dark });
    }

    render() {
        const theme = (this.state.dark ? Styles.welcomeCardDark : Styles.welcomeCardLight);
        return (
            <Template dark={this.state.dark} toggleDarkMode={this.toggleDarkMode}>
                <div className={cx( Styles.horizontalCenter )}>
                    <div className={cx( Styles.verticalCenter )}>
                        <div className={cx( Styles.welcomeCard, theme )}>
                            <div style={{ padding: 20 }}>
                                <h2>👋&nbsp;&nbsp;Welcome to Amnis!</h2>
                                <p>A thought organizer for the 21st century.</p>
                            </div>
                            <br/>
                            {/* Register & Log In Buttons */}
                            <Button className={cx( GlobalStyles.amnisButton, GlobalStyles.positiveButton )} style={{ marginBottom: 10 }} onClick={() => { netlifyIdentity.open('signup'); }}>
                                Register
                            </Button>
                            <Button className={cx( GlobalStyles.amnisButton, GlobalStyles.negativeButton )} onClick={() => { netlifyIdentity.open('login'); }}>
                                Log In
                            </Button>
                        </div>
                    </div>
                </div>
            </Template>
        )
    }

}