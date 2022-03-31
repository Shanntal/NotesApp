import axios from 'axios';

//action types
export const TYPES = {
    RENDER_NOTES: 'RENDER_NOTES',
    ADD_NOTE: 'ADD_NOTE'
}



//action creators
const renderNotesAction = (data) => {
    return {
        type: TYPES.RENDER_NOTES,
        notes: data
    }
}

const addNoteAction = (newData) => {
    return {
        type: TYPES.ADD_NOTE,
        notes: newData
    }
}




// thunks
export const renderNotes = () => async(dispatch) => {
    try {
        const data = (await axios.get('/listNotes')).data
        dispatch(renderNotesAction(data))
    }
    catch(error) {
        console.log(error);
    }
}

export const addNote = (newData) => async(dispatch) => {
    try {
        const data  = (await axios.post(`/createNote`, newData)).data
        dispatch(addNoteAction(data))
    }
    catch(error) {
        console.log(error);
    }
}