import React, { Component } from 'react';
import dateFormat from "dateformat";

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.noteText = React.createRef();
        this.clickTitle = () => {
            if (this.noteText.current.className === 'hide') {
                this.noteText.current.className ='show';
            }
            else {
                this.noteText.current.className ='hide';
            }
        }
    }

    render() {
        const { clickTitle } = this; 

        const noteCreatedDate = (note) => {
            return dateFormat(note.startDate, "mmm d, yyyy");
        }

        return (
            <div id="noteInfo" onClick={clickTitle}>
                <h1 id='noteTitle'>{this.props.title}</h1>
                <p id='noteDate'>{noteCreatedDate(this.props)}</p>
                <p className='hide' ref={this.noteText}>{this.props.text}</p>
            </div>
        )
    }
}

export default Dropdown;
