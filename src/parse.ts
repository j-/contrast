const canvas = document.createElement('canvas');
canvas.width = 1;
canvas.height = 1;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

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

export const parseColor = (color: string, background: string = 'transparent'): [number, number, number] | null => {
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
