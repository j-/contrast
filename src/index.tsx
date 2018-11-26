import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import createStore from './store/create';
import { Provider as StoreProvider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = createStore(composeWithDevTools());

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
