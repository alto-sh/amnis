import React, { createRef } from "react";

import { cx } from "emotion";
import Styles from "./ThoughtStyles";

import { DropdownButton, Dropdown, Row, Col, Button } from "react-bootstrap";

import Draggable from "react-draggable";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

import { AlignJustify, Cpu } from "react-feather";

type Props = {
    dark?: boolean,
    msg?: string,
    date?: string,
    streamList?: any,
    setCurrentStream?: Function,
    id?: string,
    updateThoughtLocation?: Function
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

    // this.myRef = React.createRef();
    private myRef = createRef<any>();

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
                    <div className={cx( Styles.thoughtStyles, theme, grabCursor )} ref={this.myRef} /*id="thisThought"*/ >
                        <Row>
                            <Col xs={10}>
                                <h6>{this.props.date ? this.props.date : (new Date()).toDateString()}

                                </h6>
                                <p className={cx( Styles.thoughtBody )}>
                                    {this.props.msg ? (
                                        this.props.msg
                                    ) : (
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate faucibus nisi in convallis. Aliquam fringilla nibh lacinia, molestie purus vel, lacinia sapien. Praesent sodales iaculis metus quis faucibus."
                                    )}
                                </p>
                            </Col>
                            <Col>
                                <div style={{ display:"inline", float:"right", marginTop:"auto", marginBottom:"auto"}} className={ cx( Styles.optionsButton )}>
                                    
                                    <Dropdown drop={"left"} style={{ width:"50px", marginBottom:"1rem" }}>
                                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                            <AlignJustify/>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {this.props.streamList.map((stream:any) => {
                                                return(
                                                    <DropdownItem onClick={() => this.props.updateThoughtLocation(this.props.id, stream)}>{stream}</DropdownItem>
                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Button variant="dark"
                                        style={{ width:"50px" }}
                                        onClick={() => {
                                            // console.log(this.props.id)
                                            let local = localStorage.getItem("DELETE_streamData");
                                            if (local) {
                                                const ID = this.props.id;
                                                let localList = local.split(",").filter(id => id !== ID);
                                                localStorage.setItem("DELETE_streamData", [...localList,ID].toString());
                                            } else {
                                                localStorage.setItem("DELETE_streamData", this.props.id);
                                            }

                                            // remove from dom
                                            this.myRef.current.remove();
                                        }}
                                    ><i className="fas fa-trash"></i>
                                    </Button>
                                    
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Draggable>
            </div>
        )
    }
}