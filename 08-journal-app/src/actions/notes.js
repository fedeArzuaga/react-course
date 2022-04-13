import { db } from "../firebase/firebase-config";
import { addDoc, collection, collectionGroup, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";

export const startNewNote = () => {
    return async ( dispatch, getState ) => {

        const uid = getState().auth.uid;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            url: ''
        }

        const docRef = await addDoc( collection( db, `${ uid }/journal/notes` ), newNote)

        dispatch(
            addNewNote( docRef.id, newNote )
        )

    }
}

export const activeNote = ( id, note ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const addNewNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotes = ( uid ) => {
    return async ( dispatch ) => {
        const notes = await loadNotes( uid );
        dispatch(
            setNotes( notes )
        )
    }
}

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
})

export const startSaveNote = ( note ) => {
    return async ( dispatch, getState ) => {
        
        const uid = getState().auth.uid;
        
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        const docRef = doc( db, `${ uid }/journal/notes/${ note.id }` );
        await updateDoc( docRef, noteToFirestore );

        dispatch(
            refreshSidebar( note.id, noteToFirestore )
        )

        Swal.fire('Saved succesfully', `Your note "${note.title} was updated properly"`, 'success');

    }
}

export const refreshSidebar = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
});

export const startUploading = ( file ) => {
    return async ( dispatch, getState ) => {

        const uid = getState().auth.uid;

        const activeNote = getState().notes.active;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false
        })
        Swal.showLoading();

        const fileUrl = await fileUpload( file );
        activeNote.url = fileUrl;

        const noteToFirestore = { ...activeNote };
        delete noteToFirestore.id;

        const docRef = doc( db, `${ uid }/journal/notes/${ activeNote.id }` );
        await updateDoc( docRef, noteToFirestore );

        dispatch(
            updateNote( activeNote )
        )

        Swal.close();

    }
}

export const startDeletingNote = ( id ) => {
    return async ( dispatch, getState ) => {

        try {

            const uid = getState().auth.uid;
            await deleteDoc( doc( db, `${ uid }/journal/notes/${ id }`) );

            dispatch(
                deleteNote( id )
            );

        } catch ( error ) {
            console.log( error );
        }

    }
}

export const deleteNote = ( id ) => ({
    type: types.notesDelete,
    payload: id
})

export const updateNote = ( note ) => ({
    type: types.notesFileUrl,
    payload: note
});