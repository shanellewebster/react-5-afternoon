//allows us to export the creation of our store.
import { createStore } from 'redux';
//In order to create our store, we'll also need our reducer.
import reducer from './ducks/reducer';

//export by default the creation of our store.
export default createStore( reducer );