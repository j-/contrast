import * as React from 'react';
import PreviewLine from './PreviewLine';
import { isColorValid } from '../parse';

export interface Props {
	foreground: string;
	background: string;
}

const Preview: React.StatelessComponent<Props> = ({ foreground, background }) => {
	const style = {
		backgroundColor: isColorValid(background) ? background : 'inherit',
		color: isColorValid(foreground) ? foreground : 'inherit',
	};
	return (
		<div className="pt-card" style={style}>
			<PreviewLine points={18} weight="normal" />
			<PreviewLine points={14} weight="bold" />
			<PreviewLine points={14} weight="normal" />
			<PreviewLine points={12} weight="bold" />
		</div>
	);
};

export default Preview;
