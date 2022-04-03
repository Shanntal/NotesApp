import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import { v4 as uuidv4} from 'uuid';

import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.success('Your note has been added');

const initialState = {
    title: '',
    text: ''
}

class AddNoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onSave = async(evt) => {
        evt.preventDefault();
        const { state } = this;
        try {
            await this.props.addNote({
                id: uuidv4,
                title: state.title,
                text: state.text
            })
        this.setState(initialState)
        }
        catch(error) {
            console.log(error)
        }
    }

    onChange = (evt) => {
        const change = {};
        change[evt.target.name] = evt.target.value;
        this.setState(change);
    }

    render() {
        const { onSave, onChange } = this;
        const { title, text } = this.state;

        return(
            <div id='main'>
                <div id='header'>
                    <h1>Add Note</h1>
                </div>
                <form id='addNote' onSubmit= {onSave}>
                    <input placeholder='Title...' type='text' name='title' value={ title } onChange= { onChange } />
                    <textarea  rows="5" cols="110" placeholder='Your Note...' type='text' name='text' value={ text } onChange= { onChange }></textarea>
                    <button id='addButton' onClick={notify}>Add Note</button>
                    <Toaster />
                </form>
                <Link to='/listNotes'>All Your Notes</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    addNote
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteForm);
