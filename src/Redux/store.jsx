import {createStore} from 'redux';
import rootReducer from './Reducres/index';

const store = createStore(rootReducer);

export {store};
