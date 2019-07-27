import * as actions from '../../src/store/actions/actionCreators';
import * as types from '../../src/store/constants/actionTypes';
import { Todo, AddTodoAction, RemoveTodoAction } from '../../src/store/types';

describe("actionsCreators", () => {

    it("Should create ADD_TODO action", () => {
        const payload: Todo = {id: "123456789", name: "Todo name"};
        const expectedAction: AddTodoAction = {
            type: types.ADD_TODO,
            payload
        };
        expect(actions.addTodo(payload)).toEqual(expectedAction);
    });

    it("Should create REMOVE_TODO action", () => {
        const payload: string = "123456789";
        const expectedAction: RemoveTodoAction = {
            type: types.REMOVE_TODO,
            payload
        };
        expect(actions.removeTodo(payload)).toEqual(expectedAction);
    })

})