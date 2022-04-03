import React, { Component } from 'react';
import {connect} from 'react-redux';
import { renderNotes } from '../actions';
import { deleteNote } from '../actions';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { IoTrashOutline } from "react-icons/io5";
import { BiNotepad } from "react-icons/bi";

class AllNotes extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.renderNotes();
        await this.props.deleteNote();
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.notes.length !== this.props.notes.length) {
          await this.props.renderNotes();
        }
      }

    render() {
        let list = (this.props.notes).reverse();

        return (
            <div id='main'>
                <div id='header'>
                    <h1>All Notes ({list.length})</h1>
                </div>
                <Link to='/createNote'><button id='button'><BiNotepad /></button> </Link>
                <div className='notesContainer'>
                    {list.map(note => {
                        return (
                            <div key={note.id}>
                                <ul>
                                    <li id='noteCard'>
                                        <button id='deleteButton' onClick={()=> this.props.deleteNote(note.id)}><IoTrashOutline/></button>
                                        <div id='dropdown'><Dropdown title ={ note.title } text = {note.text}/></div>
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
    renderNotes,
    deleteNote
}

export default connect(mapStateToProps, mapDispatchToProps)(AllNotes);