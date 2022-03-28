const initialState = [
    {
        id: 1,
        task: 'Comprar pan',
        done: false
    }
];

const todoReducer = ( state = initialState, action ) => {

    if ( action?.type === 'add' ) {
        return [...state, action.payload];
    }

    return state;

}

let todos = todoReducer();

const todo =  {
    id: 2,
    task: 'Comprar leche',
    done: false
}

const addTodoAction = {
    type: 'add',
    payload: todo
};

todos = todoReducer( todos, addTodoAction )


console.log(todos);