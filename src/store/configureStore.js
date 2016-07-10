import { createStore,applyMiddleware } from 'redux';
import Async from './../middlewares/async';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

export default function configureStore(initialState) {

    const store = createStoreWithMiddleware(rootReducer, initialState);

    return store;

}


