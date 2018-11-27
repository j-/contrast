import { connect, MapStateToProps } from 'react-redux';
import Td, { Props as P } from '../components/Td';

import {
	RootReducerState,
	contrastMeetsAALarge,
} from '../store';

const mapStateToProps: MapStateToProps<P, P, RootReducerState> = (state) => {
	const result = contrastMeetsAALarge(state);
	return result === null ?
		({
			children: '?',
			className: 'table-secondary',
		}) :
		({
			children: result ? 'Yes' : 'No',
			className: result ? 'table-success' : 'table-danger',
		});
};

export default connect(
	mapStateToProps,
	{},
)(Td);
