import rootReducer from '.';

xit('Can set foreground color', () => {
	const state = {
		foregroundInputValue: 'blue',
		foregroundLuminance: 0.07156007438363975,
		backgroundInputValue: 'white',
		backgroundLuminance: 0.99113676431634,
		contrastRatio: 8.564792096379815,
	};
	const result = rootReducer(state, {
		type: 'SetForeground',
		data: {
			color: 'red',
		},
	});
	expect(result).toEqual({
		foregroundInputValue: 'red',
		foregroundLuminance: 0.2107156760936539,
		backgroundInputValue: 'white',
		backgroundLuminance: 0.99113676431634,
		contrastRatio: 3.9933799912451153,
	});
});

xit('Can set background color', () => {
	const state = {
		foregroundInputValue: 'blue',
		foregroundLuminance: 0.07156007438363975,
		backgroundInputValue: 'white',
		backgroundLuminance: 0.99113676431634,
		contrastRatio: 8.564792096379815,
	};
	const result = rootReducer(state, {
		type: 'SetBackground',
		data: {
			color: 'black',
		},
	});
	expect(result).toEqual({
		foregroundInputValue: 'blue',
		foregroundLuminance: 0.07156007438363975,
		backgroundInputValue: 'black',
		backgroundLuminance: 0,
		contrastRatio: 2.4312014876727948,
	});
});

xit('Can switch foreground and background', () => {
	const state = {
		foregroundInputValue: 'black',
		foregroundLuminance: 0,
		backgroundInputValue: 'white',
		backgroundLuminance: 1,
		contrastRatio: 21,
	};
	const result = rootReducer(state, {
		type: 'SwapForegroundBackground',
	});
	expect(result).toEqual({
		foregroundInputValue: 'white',
		foregroundLuminance: 1,
		backgroundInputValue: 'black',
		backgroundLuminance: 0,
		contrastRatio: 21,
	});
});
