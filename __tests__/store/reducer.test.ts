import {reducer, initialState} from '../../src/store/reducers/reducer';
import * as types from '../../src/store/constants/actionTypes';

describe("Todos reducer tests", () => {
    
    it("Should return initial state", () => {
        const testReducer = reducer(undefined, {});
        expect(testReducer).toEqual(initialState);
    })

    it("Should handle ADD_TODO", () => {
        const testAction = {type: types.ADD_TODO, payload: {id: "123456789", name: "todo name"}};
        const changedState = {...initialState, todos: [...initialState.todos, testAction.payload]}
        const testReducer = reducer(initialState, testAction);
        expect(testReducer).toEqual(changedState);
    })

    it("Should handle REMOVE_TODO", () => {
        const deleteTestAction = {type: types.REMOVE_TODO, payload: "123456789"};
        const addTestAction = {type: types.ADD_TODO, payload: {id: "123456789", name: "todo name"}};

        let changedState = {...initialState, todos: [...initialState.todos, addTestAction.payload]}
        let testReducer = reducer(initialState, addTestAction);
        expect(testReducer).toEqual(changedState);
        
        testReducer = reducer(changedState, deleteTestAction);
        changedState = {...changedState, todos: changedState.todos.filter(todo => todo.id !== deleteTestAction.payload)};
        expect(testReducer).toEqual(changedState);
    })

})