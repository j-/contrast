import { Action, Reducer } from 'redux';

export interface ReducerState {

}

const DEFAULT_STATE = {

};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action: Action): ReducerState => {
	return state;
};

export default reducer;
