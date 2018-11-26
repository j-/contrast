import * as React from 'react';
import './PreviewLine.css';

export interface Props {
	points: number;
	weight: 'normal' | 'bold';
}

const PreviewLine: React.StatelessComponent<Props> = ({ points, weight }) => {
	const style = {
		fontSize: points + 'pt',
		fontWeight: weight,
	};
	return (
		<p className="PreviewLine" style={style}>
			{`${points}pt text ${weight} weight`}
		</p>
	);
};

export default PreviewLine;
