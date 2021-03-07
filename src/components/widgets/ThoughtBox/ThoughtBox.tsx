import React from "react";

import { cx } from "emotion";
import Styles from "./ThoughtBoxStyles";
import Thought from "./Thought/Thought";

type Props = {
    dark?: boolean
};
type State = {};

export default class ThoughtBox extends React.Component<Props, State> {

    render() {
        const theme = (this.props.dark ? Styles.thoughtBoxDark : Styles.thoughtBoxLight);
        return (
            <div className={cx( Styles.thoughtBox, theme )}>
                <Thought dark={this.props.dark}/>
                <Thought dark={this.props.dark}/>
                <Thought dark={this.props.dark}/>
                <Thought dark={this.props.dark}/>
            </div>
        )
    }

}