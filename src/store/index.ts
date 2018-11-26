import { Reducer } from 'redux';

import {
	ActionSetForeground,
	actionIsSetForeground,
	ActionSetBackground,
	actionIsSetBackground,
	ActionSwapForegroundBackground,
	actionIsSwapForegroundBackground,
} from './actions';

export interface RootReducerState {
	foregroundColor: string;
	backgroundColor: string;
}

const DEFAULT_STATE = {
	foregroundColor: 'black',
	backgroundColor: 'white',
};

type ActionTypes = (
	ActionSetForeground |
	ActionSetBackground |
	ActionSwapForegroundBackground
);

const reducer: Reducer<RootReducerState, ActionTypes> = (state = DEFAULT_STATE, action) => {
	if (actionIsSetForeground(action)) {
		return {
			...state,
			foregroundColor: action.data.color,
		};
	}

	if (actionIsSetBackground(action)) {
		return {
			...state,
			backgroundColor: action.data.color,
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

export const getForeground = (state: RootReducerState) => (
	state.foregroundColor
);

export const getBackground = (state: RootReducerState) => (
	state.backgroundColor
);
