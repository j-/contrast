import { createStore, GenericStoreEnhancer } from 'redux';
import rootReducer from './root';

export default (enhancer: GenericStoreEnhancer) => (
	createStore(rootReducer, enhancer)
);
