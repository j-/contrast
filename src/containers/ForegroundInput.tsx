import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import Input, { Props as P } from '../components/Input';

import {
	RootReducerState,
	getForegroundInputValue,
} from '../store';

import {
	setForeground,
} from '../store/actions';

const mapStateToProps: MapStateToProps<P, P, RootReducerState> = (state) => ({
	value: getForegroundInputValue(state),
});

const mapDispatchToProps: MapDispatchToProps<P, P> = (dispatch) => ({
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => (
		dispatch(
			setForeground(e.currentTarget.value)
		)
	),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Input);
