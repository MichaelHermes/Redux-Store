// Creates a Redux store that holds the state of the app. Only one store should exist.
import { createStore } from 'redux';

// Importing the reducer
import reducer from './reducers';

// Create a Redux store that references the imported reducer.
export default createStore(reducer);
