import * as React from 'react';
import DefineColors from '../containers/DefineColors';
import Contrast from '../containers/Contrast';
import Preview from '../containers/Preview';

const App = () => (
	<div>
		<DefineColors />
		<Contrast />
		<div style={{ width: 300, height: 50 }}>
			<Preview />
		</div>
	</div>
);

export default App;
