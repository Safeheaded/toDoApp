import {
    State,
    actionTypes,
    Todo,
    AddTodoAction
} from '../types';

import { ADD_TODO, REMOVE_TODO } from '../actions/actionTypes';

const initialState: State = {
    todos: []
};

export const mainReducer = (state = initialState, action: actionTypes) : State => {

    switch (action.type) {
        case ADD_TODO:
            return addTodo(state, action)
        case REMOVE_TODO:
            return removeTodo(state, action)
        default:
            return state;
    }

}

function removeTodo(state: State, action: actionTypes): State {
    return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
    };
}

function addTodo(state: State, action: actionTypes): State {
    return {
        ...state,
        todos: <Todo[]>[...state.todos, action.payload]
    };
}
