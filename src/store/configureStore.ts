import { createStore, compose } from 'redux';

import { mainReducer } from './reducers/reducer';

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

let composeEnhancers = compose;

if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(mainReducer, composeEnhancers());
}

export default configureStore;