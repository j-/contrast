import * as React from 'react';
import ResultMeetsAALarge from '../containers/ResultMeetsAALarge';
import ResultMeetsAASmall from '../containers/ResultMeetsAASmall';
import ResultMeetsAAALarge from '../containers/ResultMeetsAAALarge';
import ResultMeetsAAASmall from '../containers/ResultMeetsAAASmall';

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
				<ResultMeetsAALarge />
			</tr>
			<tr>
				<th>AA for small text</th>
				<td className="text-right">4.5:1</td>
				<ResultMeetsAASmall />
			</tr>
			<tr>
				<th>AAA for large text</th>
				<td className="text-right">4.5:1</td>
				<ResultMeetsAAALarge />
			</tr>
			<tr>
				<th>AAA for small text</th>
				<td className="text-right">7:1</td>
				<ResultMeetsAAASmall />
			</tr>
		</tbody>
	</table>
);

export default ResultsTable;
