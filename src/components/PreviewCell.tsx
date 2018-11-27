import * as React from 'react';
import PreviewLine from './PreviewLine';
import { isColorValid } from '../parse';

export interface Props extends React.TdHTMLAttributes<HTMLTableDataCellElement> {
	points: number;
	weight: 'normal' | 'bold';
	background: string;
	foreground: string;
}

const PreviewCell: React.StatelessComponent<Props> = ({
	points,
	weight,
	background,
	foreground,
}) => {
	const style = {
		backgroundColor: isColorValid(background) ? background : 'inherit',
		color: isColorValid(foreground) ? foreground : 'inherit',
	};
	return (
		<td className="PreviewCell" style={style}>
			<PreviewLine points={points} weight={weight} />
		</td>
	);
};

export default PreviewCell;
