import * as actions from './actionTypes';
import { AddTodoAction, Todo } from '../types';

export const addTodo = (todo: Todo) : AddTodoAction => {
    return {
        type: actions.ADD_TODO,
        payload: todo
    }
}

