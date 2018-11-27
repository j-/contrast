import * as React from 'react';
import DefineColors from './DefineColors';
import Contrast from '../containers/Contrast';
import ResultsTable from '../containers/ResultsTable';

const App: React.StatelessComponent = () => (
	<div className="App container mt-5 mb-5">
		<h1 className="mt-5 mb-5">Contrast</h1>

		<section className="mt-5 mb-5">
			<DefineColors />
		</section>

		<section className="mt-5 mb-5 text-center">
			<Contrast />
		</section>

		<section className="mt-5 mb-5">
			<div className="d-flex justify-content-center">
				<div style={{ maxWidth: '70em' }}>
					<ResultsTable />
				</div>
			</div>
		</section>
	</div>
);

export default App;
