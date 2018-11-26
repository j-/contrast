import { connect } from 'react-redux';
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

interface OwnProps {

}

const mapStateToProps = (state: RootReducerState) => ({
	foreground: getForeground(state),
	background: getBackground(state),
});

const mapDispatchToProps = ({
	setForeground,
	setBackground,
	swapForegroundBackground,
});

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(DefineColors);
