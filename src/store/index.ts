import { Reducer } from 'redux';
import { parseColor } from '../parse';

import {
	calculateRelativeLuminance,
	calculateContrastRatio,
} from '../color';

import {
	ActionSetForeground,
	actionIsSetForeground,
	ActionSetBackground,
	actionIsSetBackground,
	ActionSwapForegroundBackground,
	actionIsSwapForegroundBackground,
} from './actions';

export interface RootReducerState {
	foregroundInputValue: string;
	foregroundLuminance: number | null;
	backgroundInputValue: string;
	backgroundLuminance: number | null;
	contrastRatio: number | null;
}

const DEFAULT_STATE: RootReducerState = {
	foregroundInputValue: 'black',
	foregroundLuminance: 0,
	backgroundInputValue: 'white',
	backgroundLuminance: 1,
	contrastRatio: 21,
};

type ActionType = (
	ActionSetForeground |
	ActionSetBackground |
	ActionSwapForegroundBackground
);

const reducer: Reducer<RootReducerState, ActionType> = (state = DEFAULT_STATE, action) => {
	if (actionIsSetForeground(action)) {
		const backgroundInputValue = getBackgroundInputValue(state);
		const foregroundInputValue = action.data.color;
		const color = parseColor(foregroundInputValue, backgroundInputValue);
		const backgroundLuminance = getBackgroundLuminance(state);
		const foregroundLuminance = (
			// If the color was actually parsed
			color !== null ?
				// Get its luminance
				calculateRelativeLuminance(color) :
				// Otherwise return null
				null
		);
		const contrastRatio = (
			// If the foreground and background are both valid
			foregroundLuminance !== null && backgroundLuminance !== null ?
				// Calculate the contrast between the two
				calculateContrastRatio(foregroundLuminance, backgroundLuminance) :
				// Otherwise return null
				null
		);
		return {
			...state,
			foregroundInputValue,
			foregroundLuminance,
			contrastRatio,
		};
	}

	if (actionIsSetBackground(action)) {
		const backgroundInputValue = action.data.color;
		const color = parseColor(backgroundInputValue);
		const foregroundLuminance = getForegroundLuminance(state);
		const backgroundLuminance = (
			// If the color was actually parsed
			color !== null ?
				// Get its luminance
				calculateRelativeLuminance(color) :
				// Otherwise return null
				null
		);
		const contrastRatio = (
			// If the background and foreground are both valid
			foregroundLuminance !== null && backgroundLuminance !== null ?
				// Calculate the contrast between the two
				calculateContrastRatio(foregroundLuminance, backgroundLuminance) :
				// Otherwise return null
				null
		);
		return {
			...state,
			backgroundInputValue,
			backgroundLuminance,
			contrastRatio,
		};
	}

	if (actionIsSwapForegroundBackground(action)) {
		return {
			...state,
			foregroundInputValue: state.backgroundInputValue,
			foregroundLuminance: state.backgroundLuminance,
			backgroundInputValue: state.foregroundInputValue,
			backgroundLuminance: state.foregroundLuminance,
		};
	}

	return state;
};

export default reducer;

export const getForegroundInputValue = (state: RootReducerState) => (
	state.foregroundInputValue
);

export const getForegroundLuminance = (state: RootReducerState) => (
	state.foregroundLuminance
);

export const getBackgroundInputValue = (state: RootReducerState) => (
	state.backgroundInputValue
);

export const getBackgroundLuminance = (state: RootReducerState) => (
	state.backgroundLuminance
);

export const getContrastRatioValue = (state: RootReducerState) => (
	state.contrastRatio
);

export const getContrastRatio = (state: RootReducerState) => (
	state.contrastRatio === null ? null : (
		Math.floor(state.contrastRatio * 10) / 10 + ':1'
	)
);
