import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import Contrast from '../components/Contrast';

import {
	RootReducerState,
	getContrastRatio,
} from '../store';

interface StateProps {
	contrastRatio: string | null;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	contrastRatio: getContrastRatio(state),
});

const mapDispatchToProps: MapDispatchToProps<{}, {}> = ({

});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Contrast);
