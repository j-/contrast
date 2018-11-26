import { connect } from 'react-redux';
import Contrast from '../components/Contrast';

import {
	ReducerState,
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

const mapStateToProps = (state: ReducerState) => ({
	foreground: getForeground(state),
	background: getBackground(state),
});

const mapDispatchToProps = ({

});

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(Contrast);
