import { Action, Reducer } from 'redux';

import {
	actionIsSetForeground,
	actionIsSetBackground,
	actionIsSwapForegroundBackground,
} from './actions';

export interface ReducerState {
	foregroundColor: string;
	backgroundColor: string;
}

const DEFAULT_STATE = {
	foregroundColor: 'black',
	backgroundColor: 'white',
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action: Action): ReducerState => {
	if (actionIsSetForeground(action)) {
		return {
			...state,
			foregroundColor: action.payload.color,
		};
	}

	if (actionIsSetBackground(action)) {
		return {
			...state,
			backgroundColor: action.payload.color,
		};
	}

	if (actionIsSwapForegroundBackground(action)) {
		return {
			...state,
			foregroundColor: state.backgroundColor,
			backgroundColor: state.foregroundColor,
		};
	}

	return state;
};

export default reducer;
