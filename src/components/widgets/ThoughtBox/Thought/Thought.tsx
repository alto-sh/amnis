import React from "react";

import { cx } from "emotion";
import Styles from "./ThoughtStyles";

import { DropdownButton, Dropdown, Row, Col } from "react-bootstrap";

import Draggable from "react-draggable";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

import { AlignJustify, Cpu } from "react-feather";

type Props = {
    dark?: boolean,
    msg?: string,
    date?: string,
    streamList?: any,
    setCurrentStream?: Function
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
                        <Row>
                            <Col xs={10}>
                                <h6>{this.props.date ? this.props.date : (new Date()).toDateString()}</h6>
                                <p className={cx( Styles.thoughtBody )} style={{ wordWrap:"normal"}}>
                                    {this.props.msg ? (
                                        this.props.msg
                                    ) : (
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate faucibus nisi in convallis. Aliquam fringilla nibh lacinia, molestie purus vel, lacinia sapien. Praesent sodales iaculis metus quis faucibus."
                                    )}
                                </p>
                            </Col>
                            <Col>
                                <div style={{ display:"inline", float:"right", marginTop:"auto", marginBottom:"auto"}} className={ cx( Styles.optionsButton )}>
                                    <Dropdown drop={"left"}>
                                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                            <AlignJustify/>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {this.props.streamList.map((stream:any) => {
                                                return(
                                                    <DropdownItem onClick={() => this.props.setCurrentStream(stream)}>{stream}</DropdownItem>
                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Draggable>
            </div>
        )
    }
}