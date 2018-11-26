import { createStore, StoreEnhancer } from 'redux';
import rootReducer from '.';

export default (enhancer: StoreEnhancer) => (
	createStore(rootReducer, enhancer)
);
