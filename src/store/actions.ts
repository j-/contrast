import { Action } from 'redux';

export interface ActionSetForeground extends Action<'SetForeground'> {
	data: {
		color: string;
	};
}

export const actionIsSetForeground = (action: Action): action is ActionSetForeground => (
	action.type === 'SetForeground'
);

export const setForeground = (color: string): ActionSetForeground => ({
	type: 'SetForeground',
	data: {
		color,
	},
});

export interface ActionSetBackground extends Action<'SetBackground'> {
	data: {
		color: string;
	};
}

export const actionIsSetBackground = (action: Action): action is ActionSetBackground => (
	action.type === 'SetBackground'
);

export const setBackground = (color: string): ActionSetBackground => ({
	type: 'SetBackground',
	data: {
		color,
	},
});

export interface ActionSwapForegroundBackground extends Action<'SwapForegroundBackground'> {
}

export const actionIsSwapForegroundBackground = (action: Action): action is ActionSwapForegroundBackground => (
	action.type === 'SwapForegroundBackground'
);

export const swapForegroundBackground = (): ActionSwapForegroundBackground => ({
	type: 'SwapForegroundBackground',
});
