import * as React from 'react';
import PreviewLine from './PreviewLine';
import { isColorValid } from '../parse';

export interface Props extends React.TableHTMLAttributes<HTMLTableElement> {
	background: string;
	foreground: string;
	meetsAALarge: boolean;
	meetsAA: boolean;
	meetsAAALarge: boolean;
	meetsAAA: boolean;
}

const getCellClassName = (result: boolean | null) => (
	result !== null ? result ? 'table-success' : 'table-danger' : 'table-secondary'
);

const getCellValue = (result: boolean | null) => (
	result !== null ? result ? 'Yes' : 'No' : '?'
);

const ResultsTable: React.StatelessComponent<Props> = ({
	background,
	foreground,
	meetsAALarge,
	meetsAA,
	meetsAAALarge,
	meetsAAA,
}) => {
	const previewCellStyle = {
		backgroundColor: isColorValid(background) ? background : 'inherit',
		color: isColorValid(foreground) ? foreground : 'inherit',
	};
	return (
		<table className="ResultsTable table table-bordered">
			<thead>
				<tr>
					<th>WCAG 2.0</th>
					<th>Preview</th>
					<th className="text-right">Min. contrast</th>
					<th>Passes</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>AA for large text</th>
					<td style={previewCellStyle}>
						<PreviewLine points={18} weight="normal" />
					</td>
					<td className="text-right">3:1</td>
					<td className={getCellClassName(meetsAALarge)}>
						{getCellValue(meetsAALarge)}
					</td>
				</tr>
				<tr>
					<th>AA for small text</th>
					<td style={previewCellStyle}>
						<PreviewLine points={14} weight="bold" />
					</td>
					<td className="text-right">4.5:1</td>
					<td className={getCellClassName(meetsAA)}>
						{getCellValue(meetsAA)}
					</td>
				</tr>
				<tr>
					<th>AAA for large text</th>
					<td style={previewCellStyle}>
						<PreviewLine points={14} weight="normal" />
					</td>
					<td className="text-right">4.5:1</td>
					<td className={getCellClassName(meetsAAALarge)}>
						{getCellValue(meetsAAALarge)}
					</td>
				</tr>
				<tr>
					<th>AAA for small text</th>
					<td style={previewCellStyle}>
						<PreviewLine points={12} weight="bold" />
					</td>
					<td className="text-right">7:1</td>
					<td className={getCellClassName(meetsAAA)}>
						{getCellValue(meetsAAA)}
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default ResultsTable;
