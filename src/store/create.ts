import { createStore, StoreEnhancer } from 'redux';
import rootReducer from './root';

export default (enhancer: StoreEnhancer) => (
	createStore(rootReducer, enhancer)
);
