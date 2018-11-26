import * as React from 'react';
import DefineColors from '../containers/DefineColors';
import Contrast from '../containers/Contrast';
import Preview from '../containers/Preview';

const App: React.StatelessComponent = () => (
	<div>
		<DefineColors />
		<Contrast />
		<Preview />
	</div>
);

export default App;
