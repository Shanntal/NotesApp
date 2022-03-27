import React, { Component } from 'react';
import {connect} from 'react-redux';
import { renderNotes } from '../actions';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

class AllNotes extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.renderNotes();
    }

    render() {
        let list = (this.props.notes).reverse();

        const noteCreatedDate = (note) => {
            return dateFormat(note.startDate, "mmm d, yyyy");
        }

        return (
            <div id='main'>
                <div id='header'>
                    <h1>All Notes ({list.length})</h1>
                </div>
                <div className='notesContainer'>
                    {list.map(note => {
                        return (
                            <div key={note.id}>
                                <ul>
                                    <li>
                                        <h2>{note.title}</h2>
                                        <p id='noteDate'>{noteCreatedDate(note)}</p>
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