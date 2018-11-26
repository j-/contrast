import { connect } from 'react-redux';
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

interface DispatchProps {

}

interface OwnProps {

}

const mapStateToProps = (state: RootReducerState) => ({
	foreground: getForeground(state),
	background: getBackground(state),
});

const mapDispatchToProps = ({

});

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(Preview);
