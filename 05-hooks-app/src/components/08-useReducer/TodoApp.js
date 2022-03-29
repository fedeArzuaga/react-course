import React, { useEffect, useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';
// import './style.css';

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

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

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>TodoApp ( {todos.length} )</h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    <TodoList
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />

                </div>

                <div className="col-5">

                    <TodoAdd 
                        handleAddTodo={handleAddTodo}
                    />

                </div>

            </div>

        </div>
    )
}
