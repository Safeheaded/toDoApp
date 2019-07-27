import * as actions from '../constants/actionTypes';
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

export interface testEmptyAction {
    type?: any,
    payload?: any
}

export type actionTypes = AddTodoAction | RemoveTodoAction | testEmptyAction;