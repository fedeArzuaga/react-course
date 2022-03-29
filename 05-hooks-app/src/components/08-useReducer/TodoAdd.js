import React from 'react'
import { useForm } from '../../Hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [ { desc } , handleInputChange, reset] = useForm({
        desc: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( desc.trim().length < 1 ) { return }

        const newTodo = {
            id: new Date().getTime(),
            desc: desc,
            done: false
        }

        handleAddTodo(newTodo);
        reset();

    }

    return (
        <>
            <h4>Add task</h4>
            <hr />

            <form onSubmit={handleSubmit}>

                <input 
                    name="desc"
                    type="text"
                    className="form-control"
                    placeholder="Task description"
                    autoComplete="off"
                    value={ desc }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    Add
                </button>

            </form>
        </>
    )
}
