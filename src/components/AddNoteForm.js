import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import { v4 as uuidv4} from 'uuid';

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
            <div className='AddNoteForm'>
                <form onSubmit= { onSave }>
                    <input placeholder='Title...' name='title' value={ title } onChange= { onChange } /> 
                    <input placeholder='Your Note...' name='text' value={ text } onChange= { onChange } />
                    <button>Add Note</button>
                </form>
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
