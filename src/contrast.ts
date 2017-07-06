/**
 * Meets WCAG 2.0 requirements for minimum contrast of large text (Level AA)
 * @param contrast Contrast ratio (1-21)
 * @see https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast
 */
export const meetsAALarge = (contrast: number) => (
	contrast >= 3
);

/**
 * Meets WCAG 2.0 requirements for minimum contrast of text (Level AA)
 * @param contrast Contrast ratio (1-21)
 * @see https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast
 */
export const meetsAA = (contrast: number) => (
	contrast >= 4.5
);

/**
 * Meets WCAG 2.0 requirements for minimum contrast of large text (Level AAA)
 * @param contrast Contrast ratio (1-21)
 * @see https://www.w3.org/TR/WCAG20/#visual-audio-contrast7
 */
export const meetsAAALarge = (contrast: number) => (
	contrast >= 4.5
);

/**
 * Meets WCAG 2.0 requirements for minimum contrast of text (Level AAA)
 * @param contrast Contrast ratio (1-21)
 * @see https://www.w3.org/TR/WCAG20/#visual-audio-contrast7
 */
export const meetsAAA = (contrast: number) => (
	contrast >= 7
);
