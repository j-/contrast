import * as React from 'react';
import PreviewLine from './PreviewLine';

export interface Props {
	foreground: string;
	background: string;
}

export default class Preview extends React.Component<Props> {
	render () {
		const style = {
			backgroundColor: this.props.background,
			color: this.props.foreground,
		};
		return (
			<div className="pt-card" style={style}>
				<PreviewLine points={18} weight="normal" />
				<PreviewLine points={14} weight="bold" />
				<PreviewLine points={14} weight="normal" />
				<PreviewLine points={12} weight="bold" />
			</div>
		);
	}
}
