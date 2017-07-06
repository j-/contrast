import * as React from 'react';
import { parseColor } from '../parse';
import { calculateContrastRatio, calculateRelativeLuminance } from '../color';

export interface Props {
	foreground: string;
	background: string;
}

export default class Contrast extends React.Component<Props> {
	render () {
		const { foreground, background } = this.props;
		const parsedForeground = parseColor(foreground);
		const parsedBackground = parseColor(background);
		const luminanceForeground = calculateRelativeLuminance(parsedForeground);
		const luminanceBackground = calculateRelativeLuminance(parsedBackground);
		const contrast = calculateContrastRatio(luminanceForeground, luminanceBackground);
		return <div>{Math.ceil(contrast)}:1</div>;
	}
}
