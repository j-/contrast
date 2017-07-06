/**
 * The relative brightness of any point in a colorspace, normalized to 0 for
 * darkest black and 1 for lightest white.
 * @param r Red channel (0-1)
 * @param g Green channel (0-1)
 * @param b Blue channel (0-1)
 * @returns Relative luminance (0-1)
 * @see https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */
export const calculateRelativeLuminance = ([r, g, b]: [number, number, number]) => (
	0.2126 * (r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4) +
	0.7152 * (g <= 0.03928 ? g / 12.92 : ((g + 0.055) / 1.055) ** 2.4) +
	0.0722 * (b <= 0.03928 ? b / 12.92 : ((b + 0.055) / 1.055) ** 2.4)
);

/**
 * Ratio of the relative luminance of two colors. Contrast ratios can range from
 * 1 to 21 (commonly written 1:1 to 21:1).
 * @param l1 The relative luminance of the first color
 * @param l2 The relative luminance of the second color
 * @returns Contrast ratio (1-21)
 * @see https://www.w3.org/TR/WCAG20/#contrast-ratiodef
 */
export const calculateContrastRatio = (l1: number, l2: number) => (
	(Math.max(l1, l2) + 0.05) /
	(Math.min(l1, l2) + 0.05)
);
