const canvas = document.createElement('canvas');
canvas.width = 1;
canvas.height = 1;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

export const parseColor = (color: string): [number, number, number] => {
	ctx.clearRect(0, 0, 1, 1);
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, 1, 1);
	const { data } = ctx.getImageData(0, 0, 1, 1);
	return [
		data[0] / 0x100,
		data[1] / 0x100,
		data[2] / 0x100,
	];
};
