import { InputColor } from './color';

const canvas = document.createElement('canvas');
canvas.width = 1;
canvas.height = 1;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

/**
 * Attempts to apply the color to a `div` element as a background color. Will
 * return `true` if the color is valid and applied correctly. Returns `false`
 * otherwise.
 * @param color Input color string
 */
export const isColorValid = (color: string): boolean => {
	const div = document.createElement('div');
	div.style.backgroundColor = color;
	return div.style.backgroundColor !== '';
};

const clear = (ctx: CanvasRenderingContext2D) => {
	ctx.clearRect(0, 0, 1, 1);
};

const fill = (ctx: CanvasRenderingContext2D, style: string) => {
	ctx.fillStyle = style;
	ctx.fillRect(0, 0, 1, 1);
};

const getImageData = (ctx: CanvasRenderingContext2D) => (
	ctx.getImageData(0, 0, 1, 1)
);

/**
 * Parses a CSS color string. Returns the RGB color components as an array of
 * numbers from 0-1. Input color can have alpha channel. Will be applied on top
 * of the provided background and both will be applied on a white background.
 * @param color Color to parse
 * @param background Optional background color
 */
export const parseColor = (color: string, background: string = 'transparent'): InputColor | null => {
	if (!isColorValid(color)) {
		return null;
	}
	clear(ctx);
	fill(ctx, 'white');
	fill(ctx, background);
	fill(ctx, color);
	const { data } = getImageData(ctx);
	return [
		data[0] / 0x100,
		data[1] / 0x100,
		data[2] / 0x100,
	];
};
