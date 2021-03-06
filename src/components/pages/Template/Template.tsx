import React from "react";

import { cx } from "emotion";
import Styles from "./TemplateStyles";
import Container from "react-bootstrap/Container";

type Props = {
    dark?: boolean,
    toggleDarkMode: Function
};
type State = {};

export default class Template extends React.Component<Props, State> {

    render() {
        const theme = (this.props.dark ? Styles.templateDark : Styles.templateLight);
        return (
            <div className={cx( Styles.template, theme )}>
                <h1 className={cx( Styles.pageHeader )} onClick={() => { this.props.toggleDarkMode(); }}>Amnis</h1>
                <Container className={cx( Styles.containerStyles)}>
                    {this.props.children}
                </Container>
            </div>
        )
    }

}