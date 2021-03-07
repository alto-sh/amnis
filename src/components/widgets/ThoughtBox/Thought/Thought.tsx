import React from "react";

import { cx } from "emotion";
import Styles from "./ThoughtStyles";

import Draggable from "react-draggable";

type Props = {
    dark?: boolean,
    msg?: string,
    date?: string,
};
type State = {
    grabbingStatus: boolean
};

export default class Thought extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            grabbingStatus: false
        }
    }

    render() {
        const theme = (this.props.dark ? Styles.thoughtDark : Styles.thoughtLight);
        const grabCursor = (this.state.grabbingStatus ? Styles.grabbingCursor : Styles.grabCursor )
        return (
            <div className={`${cx( Styles.thoughtsContainer, theme )} thoughtsContainer`}>
                <Draggable
                onStart={() => this.setState({ grabbingStatus: true })}
                onStop={() => this.setState({ grabbingStatus: false })}
                position={{x:0,y:0}}
                >
                    <div className={cx( Styles.thoughtStyles, theme, grabCursor )}>
                        <h6>{this.props.date ? this.props.date : (new Date()).toDateString()}</h6>
                        <p className={cx( Styles.thoughtBody )}>
                            {this.props.msg ? (
                                this.props.msg
                            ) : (
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate faucibus nisi in convallis. Aliquam fringilla nibh lacinia, molestie purus vel, lacinia sapien. Praesent sodales iaculis metus quis faucibus."
                            )}
                        </p>
                    </div>
                </Draggable>
            </div>
        )
    }
}