import rootReducer from '.';

import {
	ActionSetForeground,
	ActionSetBackground,
	ActionSwapForegroundBackground,
} from './actions';

it('Can set foreground color', () => {
	const state = {
		foregroundColor: 'blue',
		backgroundColor: 'white',
	};
	const action: ActionSetForeground = {
		type: 'SetForeground',
		data: {
			color: 'red',
		},
	};
	const result = rootReducer(state, action);
	expect(result).toEqual({
		foregroundColor: 'red',
		backgroundColor: 'white',
	});
});

it('Can set background color', () => {
	const state = {
		foregroundColor: 'blue',
		backgroundColor: 'white',
	};
	const action: ActionSetBackground = {
		type: 'SetBackground',
		data: {
			color: 'black',
		},
	};
	const result = rootReducer(state, action);
	expect(result).toEqual({
		foregroundColor: 'blue',
		backgroundColor: 'black',
	});
});

it('Can switch foreground and background', () => {
	const state = {
		foregroundColor: 'black',
		backgroundColor: 'white',
	};
	const action: ActionSwapForegroundBackground = {
		type: 'SwapForegroundBackground',
	};
	const result = rootReducer(state, action);
	expect(result).toEqual({
		foregroundColor: 'white',
		backgroundColor: 'black',
	});
});
