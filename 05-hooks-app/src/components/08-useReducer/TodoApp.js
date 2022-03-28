import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../Hooks/useForm';
import { todoReducer } from './todoReducer';
// import './style.css';

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [ { desc } , handleInputChange, reset] = useForm({
        desc: '',
    });

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    /* 
        Handles functions
    */    
    const handleDelete = ( todoID ) => {
        
        const action = {
            type: 'delete',
            payload: todoID
        }

        dispatch(action);

    }

    const handleToggle = ( todoID ) => {

        dispatch({
            type: 'toggle',
            payload: todoID
        })

    }

    const handleSubmit = e => {

        e.preventDefault();

        if ( desc.trim().length < 1 ) { return }

        const newTodo = {
            id: new Date().getTime(),
            desc: desc,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();

    }

    return (
        <div>
            <h1>TodoApp ( {todos.length} )</h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    <ul className="list-group list-group-flush">
                        {
                            todos.map( (todo, i) => (
                                <li 
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p 
                                        onClick={ () => handleToggle(todo.id) }
                                        className={`${ todo.done && 'completed' }`}
                                    >
                                        { i + 1 }. { todo.desc }
                                    </p>
                                    <button
                                        className="btn btn-danger"
                                        data-id={todo.id}
                                        onClick={ () => { handleDelete( todo.id ) } }
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                <div className="col-5">

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

                </div>

            </div>

        </div>
    )
}
