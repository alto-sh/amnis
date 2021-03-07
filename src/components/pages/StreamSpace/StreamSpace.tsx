import React from "react";
import { withRouter } from "react-router";

import { Container, Row, Col, Button } from "react-bootstrap";

import Template from "../Template/Template";
import ThoughtStyles from "./StreamSpaceStyles";

import { cx } from "emotion";
import Styles from "./StreamSpaceStyles";
import StreamTab from "../../widgets/StreamTab/StreamTab";
import ThoughtBox from "../../widgets/ThoughtBox/ThoughtBox";
import StreamTabStyles from "../../widgets/StreamTab/StreamTabStyles";

import netlifyIdentity from "netlify-identity-widget";
import { faBlackberry } from "@fortawesome/free-brands-svg-icons";

type Props = {};
type State = {
    dark: boolean,
    // streams: Array<any>
    streams: any,
    modalRes: String
};

export default class StreamSpace extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            dark: true,
            streams: [],
            modalRes: "placeholder"
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

    addToStreams(Stream:string) {
        if (Stream.length > 0) {
            this.setState({ streams: [...this.state.streams,Stream] })
        }
        // this.setState({streams: [1,2]})
    }

    updateModal(res:string) {
        this.setState({modalRes: res})
        this.addToStreams(res)
    }

    render() {

        const addStream = () => {
            console.log("new stream");
            let span = document.createElement("span");
            console.log(this.state.streams);
            // <div className={cx( Styles.thoughtStyles )}>
            //     <h6>{(new Date()).toDateString()}</h6>
            //     <p className={cx( Styles.thoughtBody )}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate faucibus nisi in convallis. Aliquam fringilla nibh lacinia, molestie purus vel, lacinia sapien. Praesent sodales iaculis metus quis faucibus.</p>
            // </div>
        }

        const Modal = () => {
            if (this.state.modalRes.length <= 0) {
                return (
                    <div className={Styles.thoughtModalContainer}>
                        <div className={Styles.thoughtModal}>
                            <div>
                                <h1>Create Stream</h1>
                                <span className={ThoughtStyles.inputContainer}>
                                    <input id="chatInput" type="text" placeholder="Write your thought here..." required/>
                                    <button onClick={() => {
                                        let msgDOM:any = document.getElementById("chatInput");
                                        this.updateModal(msgDOM.value)
                                        msgDOM.value = "";
                                    }}>Send</button>
                                </span>
                            </div>
                        </div>
                    </div>
                )
            }
            return (<></>)
        }

        return (
            <Template dark={this.state.dark} toggleDarkMode={this.toggleDarkMode}>              
                <Row>
                    <Col sm={3}>
                        <div className={Styles.streamSpaceContainer}>
                            {/* Log Out Button */}
                            <div className={cx( Styles.logoutButton )} onClick={() => { netlifyIdentity.logout(); }}>
                                Log Out
                            </div>
                            {/* Map Stream Tabs Here */}
                            {this.state.streams.map((stream:any) => {
                                return (
                                    <div 
                                    key={stream + Math.random().toString()}
                                    style={{background: 'rgba(255, 255, 255, 0.1)'}}
                                    className={cx( StreamTabStyles.tabStyles/*, theme*/ )}
                                    onClick={() => {
                                        console.log(stream);
                                    }}
                                    >
                                    {stream}
                                    </div>
                                )
                            })}
                            <StreamTab dark={this.state.dark}/>
                            {/* New Stream Button */}
                            <div onClick={() => {
                                // this.addToStreams("tests")
                                this.updateModal("")
                                addStream()
                            }} className={cx( Styles.newStreamButton )}>
                                🖊&nbsp;&nbsp;New Stream
                            </div>
                        </div>
                    </Col>
                    <Modal />
                    <Col sm={9}>
                        <ThoughtBox dark={this.state.dark}/>
                    </Col>
                </Row>
            </Template>
        );
    }
}