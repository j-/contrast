import * as React from 'react';
import DefineColors from './DefineColors';
import Preview from '../containers/Preview';
import ResultsTable from './ResultsTable';

const App: React.StatelessComponent = () => (
	<div className="App container mt-5 mb-5">
		<h1 className="mt-5 mb-5">Contrast</h1>

		<section className="mt-5 mb-5">
			<DefineColors />
		</section>

		<section className="mt-5 mb-5">
			<Preview />
		</section>

		<section className="mt-5 mb-5">
			<div className="d-flex justify-content-center">
				<div style={{ maxWidth: '40em' }}>
					<ResultsTable />
				</div>
			</div>
		</section>
	</div>
);

export default App;
