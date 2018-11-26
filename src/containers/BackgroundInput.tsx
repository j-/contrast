import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import Input, { Props as P } from '../components/Input';

import {
	RootReducerState,
	getBackgroundInputValue,
} from '../store';

import {
	setBackground,
} from '../store/actions';

const mapStateToProps: MapStateToProps<P, P, RootReducerState> = (state) => ({
	value: getBackgroundInputValue(state),
});

const mapDispatchToProps: MapDispatchToProps<P, P> = (dispatch) => ({
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => (
		dispatch(
			setBackground(e.currentTarget.value)
		)
	),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Input);
