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
            <div id='main'>
                <div id='header'>
                    <h1>All Notes</h1>
                </div>
                <div className='notesContainer'>
                    {this.props.notes.map(note => {
                        return (
                            <div key={note.id}>
                                <ul>
                                    <li>
                                        <h2>{note.title}</h2>
                                        <p>{note.text}</p>
                                    </li>
                                </ul> 
                            </div>
                        )
                    })}
                </div>
                <Link to='/createNote'><button id='button'>Add Note</button> </Link>
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