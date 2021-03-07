import React from "react";

import { cx } from "emotion";
import Styles from "./ThoughtBoxStyles";
import Thought from "./Thought/Thought";

type Props = {
    dark?: boolean,
    stateData?: any,
    currentStream?: any
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

        const ThoughtBoxMessage = (msg:string) => {
            return (
                <div key={Math.random().toString()} className ={Styles.pickStream}>
                    <span>
                        {msg}
                    </span>
                </div>
            )
        }

        console.log("STATEDATA: ",this.props.stateData, "LENGTH: ", this.props.stateData.length);
        const theme = (this.props.dark ? Styles.thoughtBoxDark : Styles.thoughtBoxLight);
        return (
            <div className={`${cx( Styles.thoughtBox, theme )} tBox`}>
                {this.props.currentStream.length > 0
                ? (
                    <>
                    {/* document.getElementsByClassName("tBox").length > 0 */}
                    {this.props.stateData.length > 0 ? (
                        this.props.stateData.map((stream:any) => {
                            console.log("STREAM MAP", stream);
                            if (stream.stream === this.props.currentStream) {
                                return <Thought dark={this.props.dark} date={stream.date} msg={stream.msg} key={stream.stream + Math.random().toString()} />
                            }
                        })
                    ) : (
                        ThoughtBoxMessage("Add Some Thoughts!")
                    )
                    }
                    </>
                ) : (
                    <>
                        {ThoughtBoxMessage("Create Or Pick A Stream!")}

                        {/* <Thought dark={this.props.dark}/>
                        <Thought dark={this.props.dark}/>
                        <Thought dark={this.props.dark}/>
                        <Thought dark={this.props.dark}/> */}
                    </>
                ) }
            </div>
        )
    }

}