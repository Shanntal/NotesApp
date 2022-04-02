import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { TYPES } from './actions';

const initialState = {
    notes: []
}


//reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TYPES.RENDER_NOTES:
            return {
                ...state,
                notes: action.notes
            }
        case TYPES.ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.notes]
            }
        // case TYPES.DELETE_NOTE:
        //     return {
        //         ...state,
        //         notes: state.notes.filter(note => note.id !== action.notes)
        //     }
        case TYPES.DELETE_NOTE:
            return {
                ...state,
                notes: []
            }
        default: return state;
    }
}

//creating store
const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;