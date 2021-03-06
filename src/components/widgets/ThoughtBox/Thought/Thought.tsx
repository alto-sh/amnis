import React from "react";

import { cx } from "emotion";
import Styles from "./ThoughtStyles";

type Props = {
    dark?: boolean
};
type State = {};

export default class Thought extends React.Component<Props, State> {

    render() {
        const theme = (this.props.dark ? Styles.thoughtDark : Styles.thoughtLight);
        return (
            <div className={cx( Styles.thoughtStyles, theme )}>
                <h6>{(new Date()).toDateString()}</h6>
                <p className={cx( Styles.thoughtBody )}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate faucibus nisi in convallis. Aliquam fringilla nibh lacinia, molestie purus vel, lacinia sapien. Praesent sodales iaculis metus quis faucibus.</p>
            </div>
        )
    }

}