import rootReducer from '.';

it('Can set foreground color', () => {
	const state = {
		foregroundColor: 'blue',
		backgroundColor: 'white',
	};
	const result = rootReducer(state, {
		type: 'SetForeground',
		data: {
			color: 'red',
		},
	});
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
	const result = rootReducer(state, {
		type: 'SetBackground',
		data: {
			color: 'black',
		},
	});
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
	const result = rootReducer(state, {
		type: 'SwapForegroundBackground',
	});
	expect(result).toEqual({
		foregroundColor: 'white',
		backgroundColor: 'black',
	});
});
