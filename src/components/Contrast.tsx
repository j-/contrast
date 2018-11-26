import * as React from 'react';
import { parseColor } from '../parse';
import { calculateContrastRatio, calculateRelativeLuminance } from '../color';

export interface Props {
	foreground: string;
	background: string;
}

const Unknown: React.StatelessComponent = () => <div><em>Invalid colors</em></div>;

const Contrast: React.StatelessComponent<Props> = ({ foreground, background }) => {
	const parsedForeground = parseColor(foreground, background);
	if (parsedForeground === null) {
		return <Unknown />;
	}
	const parsedBackground = parseColor(background);
	if (parsedBackground === null) {
		return <Unknown />;
	}
	const contrast = calculateContrastRatio(
		calculateRelativeLuminance(parsedForeground),
		calculateRelativeLuminance(parsedBackground)
	);
	return <div>{Math.ceil(contrast)}:1</div>;
};

export default Contrast;
