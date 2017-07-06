import * as React from 'react';
import './PreviewLine.css';

export interface Props {
	points: number;
	weight: 'normal' | 'bold';
}

export default class PreviewLine extends React.Component<Props> {
	render () {
		const { points, weight } = this.props;
		const style = {
			fontSize: points + 'pt',
			fontWeight: weight,
		};
		return (
			<p className="PreviewLine" style={style}>
				{`${points}pt text ${weight} weight`}
			</p>
		);
	}
}
