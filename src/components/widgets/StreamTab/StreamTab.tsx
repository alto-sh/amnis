import React from "react";

import { cx } from "emotion";
import Styles from "./StreamTabStyles";

type Props = {
    dark?: boolean
};
type State = {};

export default class StreamTab extends React.Component<Props, State> {

    render() {
        const theme = (this.props.dark ? Styles.tabDark : Styles.tabLight);
        return (
            <div className={cx( Styles.tabStyles, theme )}>
                Default Stream
            </div>
        )
    }

}