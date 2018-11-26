import * as React from 'react';
import DefineColors from './DefineColors';
import Contrast from '../containers/Contrast';
import Preview from '../containers/Preview';

const App: React.StatelessComponent = () => (
	<div className="App container mt-5 mb-5">
		<h1 className="mt-5 mb-5">Contrast</h1>

		<section className="mt-5 mb-5">
			<DefineColors />
		</section>

		<section className="mt-5 mb-5">
			<Contrast />
		</section>

		<section className="mt-5 mb-5">
			<Preview />
		</section>
	</div>
);

export default App;
