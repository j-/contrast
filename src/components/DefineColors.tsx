import * as React from 'react';
import ForegroundInput from '../containers/ForegroundInput';
import BackgroundInput from '../containers/BackgroundInput';
import SwapButton from '../containers/SwapButton';

const DefineColors: React.StatelessComponent = () => (
	<div className="DefineColors card card-body">
		<div className="row">
			<div className="form-group col">
				<label htmlFor="DefineColors-define-foreground">
					Foreground color
				</label>
				<ForegroundInput
					id="DefineColors-define-foreground"
					className="form-control"
					type="text"
				/>
			</div>
			<div className="form-group col">
				<label htmlFor="DefineColors-define-background">
					Background color
				</label>
				<BackgroundInput
					id="DefineColors-define-background"
					className="form-control"
					type="text"
				/>
			</div>
		</div>
		<SwapButton
			className="btn btn-light col-2"
			type="button"
		>
			Swap
		</SwapButton>
	</div>
);

export default DefineColors;
