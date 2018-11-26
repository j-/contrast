import { Action } from 'redux';

export interface ActionSetForeground extends Action {
	type: 'SET_FOREGROUND';
	payload: {
		color: string;
	};
}

export const actionIsSetForeground = (action: Action): action is ActionSetForeground => (
	action.type === 'SET_FOREGROUND'
);

export const setForeground = (color: string): ActionSetForeground => ({
	type: 'SET_FOREGROUND',
	payload: {
		color,
	},
});

export interface ActionSetBackground extends Action {
	type: 'SET_BACKGROUND';
	payload: {
		color: string;
	};
}

export const actionIsSetBackground = (action: Action): action is ActionSetBackground => (
	action.type === 'SET_BACKGROUND'
);

export const setBackground = (color: string): ActionSetBackground => ({
	type: 'SET_BACKGROUND',
	payload: {
		color,
	},
});

export interface ActionSwapForegroundBackground extends Action {
	type: 'SWAP_FOREGROUND_BACKGROUND';
}

export const actionIsSwapForegroundBackground = (action: Action): action is ActionSwapForegroundBackground => (
	action.type === 'SWAP_FOREGROUND_BACKGROUND'
);

export const swapForegroundBackground = (): ActionSwapForegroundBackground => ({
	type: 'SWAP_FOREGROUND_BACKGROUND',
});
