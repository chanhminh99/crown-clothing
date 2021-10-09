import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

console.log('mid', middlewares)

const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store)

const wrapperStore = {store, persistor}

export default wrapperStore;