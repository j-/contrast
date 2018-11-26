import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import DefineColors from '../components/DefineColors';

import {
	RootReducerState,
	getForeground,
	getBackground,
} from '../store';

import {
	setForeground,
	setBackground,
	swapForegroundBackground,
} from '../store/actions';

interface StateProps {
	foreground: string;
	background: string;
}

interface DispatchProps {
	setForeground: (foreground: string) => void;
	setBackground: (background: string) => void;
	swapForegroundBackground: () => void;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	foreground: getForeground(state),
	background: getBackground(state),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = ({
	setForeground,
	setBackground,
	swapForegroundBackground,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DefineColors);
