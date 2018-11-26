import { connect, MapDispatchToProps } from 'react-redux';
import Button, { Props as P } from '../components/Button';

import {
	swapForegroundBackground,
} from '../store/actions';

const mapDispatchToProps: MapDispatchToProps<P, P> = ({
	onClick: swapForegroundBackground,
});

export default connect<P, P, P, P>(
	undefined,
	mapDispatchToProps,
)(Button);
