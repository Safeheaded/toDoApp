import * as actions from '../constants/actionTypes';
import { AddTodoAction, Todo, RemoveTodoAction } from '../types';

export const addTodo = (todo: Todo) : AddTodoAction => {
    return {
        type: actions.ADD_TODO,
        payload: todo
    }
}

export const removeTodo = (id: string) : RemoveTodoAction => {
    return {
        type: actions.REMOVE_TODO,
        payload: id
    }
}

