import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import {AsyncStorage} from 'react-native';
import taskReducer from './tasks';
import filterReducer from './filter';
console.log("log");
const persistConfig = {
    key: 'key1',
    storage: AsyncStorage
}


const rootReducer =  combineReducers({
    filter: filterReducer, 
    tasks: taskReducer,
});

const localPersistReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(localPersistReducer);

export const persistor = persistStore(store);

