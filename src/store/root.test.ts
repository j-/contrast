import rootReducer from './root';

it('Can set foreground color', () => {
	const state = {
		foregroundColor: 'blue',
		backgroundColor: 'white',
	};
	const action = {
		type: 'SET_FOREGROUND',
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
	const action = {
		type: 'SET_BACKGROUND',
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
	const action = {
		type: 'SWITCH_FOREGROUND_BACKGROUND',
	};
	const result = rootReducer(state, action);
	expect(result).toEqual({
		foregroundColor: 'black',
		backgroundColor: 'white',
	});
});
