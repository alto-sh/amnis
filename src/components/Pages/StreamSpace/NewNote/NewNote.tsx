import React from "react";

import { cx } from "emotion";
import Styles from "./NewNoteStyles";
import { Form } from "react-bootstrap";

type Props = {
    dark?: boolean
};
type State = {
    note: string
};

export default class NewNote extends React.Component<Props, State> {

    characterLimit: number = 240;
    
    constructor(props: Props) {
        super(props);

        this.state = {
            note: ""
        }

        // Method Binding
        this.updateNote = this.updateNote.bind(this);
    }

    updateNote(e: any) {
        const noteString: string = e.target.value;
        if (noteString.length > this.characterLimit) return;
        this.setState({ note: noteString });
    }

    render() {
        const theme = (this.props.dark ? Styles.newNoteDark : Styles.newNoteLight);

        return (
            <div className={cx( Styles.newNoteStyles, theme )}>
                <h3>🖊&nbsp;&nbsp;Make a Note</h3>
                <Form name="new-note-form">
                    <Form.Group>
                        <Form.Control 
                            id="new-note-input-field"
                            as="textarea"
                            placeholder="Make a Note..."
                            value={this.state.note}
                            onChange={this.updateNote}
                        />
                        <Form.Text>{`${this.state.note.length}/${this.characterLimit} Characters`}</Form.Text>
                    </Form.Group>
                </Form>
            </div>
        )
    }

}