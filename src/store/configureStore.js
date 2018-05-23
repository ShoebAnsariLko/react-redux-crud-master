import {createStore, applyMiddleware, compose} from 'redux';
// To handle async actions (like API calls) in store
import thunk from 'redux-thunk';
// Reducers
import reducers from '../reducers';
// Initial state
import initialState from './initialState';

const configureStore = () => {
    return createStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
    );
};

export default configureStore;
