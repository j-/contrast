import * as React from 'react';
import { parseColor } from '../parse';
import { calculateContrastRatio, calculateRelativeLuminance } from '../color';

export interface Props {
	foreground: string;
	background: string;
}

const Unknown = () => <div><em>Invalid colors</em></div>;

export default class Contrast extends React.Component<Props> {
	render () {
		const { foreground, background } = this.props;
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
	}
}
