import React, { Component } from 'react';
import {connect} from 'react-redux';
import { renderNotes } from '../actions';
import { Link } from 'react-router-dom';

class AllNotes extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.renderNotes();
    }

    render() {
        return (
            <div>
                <h1>All Notes</h1>
                <Link to='/createNote'><button>Add Note</button> </Link>
                <div className='notesContainer'>
                    {this.props.notes.map(note => {
                        //const linkAddress = `/notes/${note.id}`
                        //const id = `${note.id}`
                        return (
                            <div key={note.id}>
                                <ul>
                                    <li>
                                        <h2>{note.title}</h2>
                                    </li>
                                </ul> 
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    renderNotes
}

export default connect(mapStateToProps, mapDispatchToProps)(AllNotes);