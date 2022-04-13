import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { notes: { active: note } } = useSelector( state => state );

    const handleSaveNote = () => {
        dispatch(
            startSaveNote( note )
        );
    }

    const handlePicture = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
 
        if ( file ) {
            dispatch(
                startUploading( file )
            )
        }

    }

    return (
        <div className="notes__appbar">
            <span>
                28 de Agosto 2022
            </span>

            <input
                id="fileSelector"
                type="file"
                style={{
                    display: 'none'
                }}
                name="file"
                onChange={ handleFileChange }
            />

            <div>
                <button
                    className="btn"
                    onClick={ handlePicture }
                >
                    Picture
                </button>

                <button
                    className="btn"
                    onClick={ handleSaveNote }
                >
                    Save
                </button>
            </div>
        </div>
    )
}
