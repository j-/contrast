import * as React from 'react';

const ResultsTable: React.StatelessComponent = () => (
	<table className="ResultsTable table table-bordered">
		<thead>
			<tr>
				<th>WCAG 2.0</th>
				<th className="text-right">Min. contrast</th>
				<th>Passes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>AA for large text</th>
				<td className="text-right">3:1</td>
				<td className="table-success">Yes</td>
			</tr>
			<tr>
				<th>AA for small text</th>
				<td className="text-right">4.5:1</td>
				<td className="table-success">Yes</td>
			</tr>
			<tr>
				<th>AAA for large text</th>
				<td className="text-right">4.5:1</td>
				<td className="table-success">Yes</td>
			</tr>
			<tr>
				<th>AAA for small text</th>
				<td className="text-right">7:1</td>
				<td className="table-danger">No</td>
			</tr>
		</tbody>
	</table>
);

export default ResultsTable;
