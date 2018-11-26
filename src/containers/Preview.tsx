import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import Preview from '../components/Preview';

import {
	RootReducerState,
	getForeground,
	getBackground,
} from '../store';

interface StateProps {
	foreground: string;
	background: string;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	foreground: getForeground(state),
	background: getBackground(state),
});

const mapDispatchToProps: MapDispatchToProps<{}, {}> = ({

});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Preview);
