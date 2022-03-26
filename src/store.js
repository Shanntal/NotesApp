import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { TYPES } from './actions';

const initialState = {
    notes: []
}

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
        default: return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;