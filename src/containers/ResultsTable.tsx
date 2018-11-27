import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import ResultsTable from '../components/ResultsTable';

import {
	RootReducerState,
	getForegroundInputValue,
	getBackgroundInputValue,
	contrastMeetsAALarge,
	contrastMeetsAA,
	contrastMeetsAAALarge,
	contrastMeetsAAA,
} from '../store';

interface StateProps {
	foreground: string;
	background: string;
	meetsAALarge: boolean | null;
	meetsAA: boolean | null;
	meetsAAALarge: boolean | null;
	meetsAAA: boolean | null;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	foreground: getForegroundInputValue(state),
	background: getBackgroundInputValue(state),
	meetsAALarge: contrastMeetsAALarge(state),
	meetsAA: contrastMeetsAA(state),
	meetsAAALarge: contrastMeetsAAALarge(state),
	meetsAAA: contrastMeetsAAA(state),
});

const mapDispatchToProps: MapDispatchToProps<{}, {}> = ({

});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ResultsTable);
