import React from 'react'

export const TodoItem = ({ todo, i, handleToggle, handleDelete }) => {

    console.log('No tengo nada que ver')

    return (
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
    )
}
