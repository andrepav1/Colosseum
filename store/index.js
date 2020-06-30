import {combineReducers, createStore} from 'redux';
import GlobalSettings from '../reducers/GlobalSettings';

const rootReducer = combineReducers({
  GlobalSettings
});

const store = createStore(rootReducer);

export default store;