import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import Preview from '../components/Preview';

import {
	RootReducerState,
	getForegroundInputValue,
	getBackgroundInputValue,
} from '../store';

interface StateProps {
	foreground: string;
	background: string;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	foreground: getForegroundInputValue(state),
	background: getBackgroundInputValue(state),
});

const mapDispatchToProps: MapDispatchToProps<{}, {}> = ({

});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Preview);
