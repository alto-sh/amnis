import React from "react";

import { cx } from "emotion";
import Styles from "./ThoughtBoxStyles";
import Thought from "./Thought/Thought";

type Props = {
    dark?: boolean,
    stateData?: any,
    currentStream?: any,
    grabbingStatus: boolean,
    updateGrabbingStatus: Function,
    dropToStreamHoveredOver: Function
};
type State = {};

export default class ThoughtBox extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        // this.state = {
        //     stateData: []
        // }
    }

    render() {
        console.log(this.props.stateData);
        const theme = (this.props.dark ? Styles.thoughtBoxDark : Styles.thoughtBoxLight);
        return (
            <div className={cx( Styles.thoughtBox, theme )}>
                {this.props.stateData ? (
                    <>
                    {
                        this.props.stateData.map((stream:any) => {
                            console.log("STREAM MAP", stream);
                            if (stream.stream === this.props.currentStream) {
                                return <Thought dark={this.props.dark} date={stream.date} msg={stream.msg} key={stream.stream + Math.random().toString()} grabbingStatus={this.props.grabbingStatus} updateGrabbingStatus={this.props.updateGrabbingStatus} dropToStreamHoveredOver={this.props.dropToStreamHoveredOver}/>
                            }
                        })
                    }
                    </>
                ) : (
                    <>
                        <Thought dark={this.props.dark}/>
                        <Thought dark={this.props.dark}/>
                        <Thought dark={this.props.dark}/>
                        <Thought dark={this.props.dark}/>
                    </>
                ) }
            </div>
        )
    }

}