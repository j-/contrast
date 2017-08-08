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
		if (parsedForeground === null) {
			return null;
		}
		const parsedBackground = parseColor(background);
		if (parsedBackground === null) {
			return null;
		}
		const contrast = calculateContrastRatio(
			calculateRelativeLuminance(parsedForeground),
			calculateRelativeLuminance(parsedBackground)
		);
		return <div>{Math.ceil(contrast)}:1</div>;
	}
}
