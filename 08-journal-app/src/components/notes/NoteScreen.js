import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { activeNote, startDeletingNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const { notes: { active: note } } = useSelector( state => state );

    const dispatch = useDispatch();

    const [ formValues, handleInputChange, reset ] = useForm(note);

    const activeId = useRef( note.id );

    useEffect( () => {

        if ( note.id !== activeId.current ) {
            reset( note );
            activeId.current = note.id;
        }

    }, [note, reset])

    useEffect(() => {
      
        dispatch(
            activeNote( formValues.id, { ...formValues } )
        );

    }, [ dispatch, formValues ])

    const handleDelete = () => {
        dispatch(
            startDeletingNote( note.id )
        );
    }

    const { body, title } = formValues;

    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <form className="notes__form">

                    <input
                        type="text"
                        name="title"
                        placeholder="Some text here..."
                        className="notes__title-input"
                        autoComplete="off"
                        value={ title }
                        onChange={ handleInputChange }
                    />

                    <textarea
                        placeholder="What happened today"
                        name="body"
                        className="notes__textarea"
                        autoComplete="off"
                        value={ body }
                        onChange={ handleInputChange }
                    >
                    </textarea>

                    {
                        note.url && (
                            <div className="notes__image">
                                <img
                                    src={ note.url }
                                    alt="image"
                                    style={{
                                        maxHeight: '100px'
                                    }}
                                />
                            </div>
                        )
                    }

                </form>

                <button 
                    className='btn btn-danger'
                    onClick={ handleDelete }
                >
                    Delete
                </button>

            </div>

        </div>
    )
}
