import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = ( state = initialState, action ) => {

    switch( action.type ) {

        case types.notesAddNew:
            return {
                active: {
                    ...action.payload
                },
                notes: [
                    ...state.notes,
                    { ...action.payload }
                ]
            }

        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.notesLoad:
            return {
                ...state,
                notes: [ ...action.payload ]
            }

        case types.notesUpdated:
            return {
                ...state,
                notes: state.notes.map( note => {
                    if ( note.id === action.payload.id ) {
                        note = action.payload.note;
                    }
                    return note;
                })
            }

        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter( note => note.id !== action.payload )
            }

        case types.notesFileUrl:
            return {
                active: {
                    ...state.active,
                    url: action.payload.url
                },
                notes: state.notes.map( note => {
                    if ( note.id === action.payload.id ) {
                        note.url = action.payload.url;
                    }
                    return note;
                })
            }
        
        case types.notesLogoutCleaning:
            return {
                notes: [],
                active: null
            }

        default:
            return state;
    }

}