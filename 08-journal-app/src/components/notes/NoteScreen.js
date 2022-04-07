import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <form className="notes__form">

                    <input
                        type="text"
                        placeholder="Some text here..."
                        className="notes__title-input"
                        autoComplete="off"
                    />

                    <textarea
                        placeholder="What happened today"
                        className="notes__textarea"
                        autoComplete="off"
                    >
                    </textarea>

                    <div className="notes__image">
                        <img
                            src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
                            alt="image"
                            style={{
                                maxHeight: '100px'
                            }}
                        />
                    </div>

                </form>

            </div>

        </div>
    )
}
