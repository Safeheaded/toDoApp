import * as actions from '../actions/actionTypes';
import { Action } from 'redux';

export interface Todo {
    name: string,
    id: string
}

export interface State {
    todos: Todo[]
}

export interface AddTodoAction extends Action {
    type: typeof actions.ADD_TODO,
    payload: Todo
}

export interface RemoveTodoAction extends Action {
    type: typeof actions.REMOVE_TODO,
    payload: string
}

export type actionTypes = AddTodoAction | RemoveTodoAction;