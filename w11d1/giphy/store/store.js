import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// thunk action creator returns a function
// when called with a dispatch arg, it can dispatch additional items
import rootReducer from '../reducers/root_reducer';



const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;