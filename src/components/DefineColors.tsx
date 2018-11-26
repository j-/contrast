import * as React from 'react';

export interface Props {
	foreground: string;
	background: string;
	setForeground: (foreground: string) => void;
	setBackground: (background: string) => void;
	swapForegroundBackground: () => void;
}

export default class DefineColors extends React.PureComponent<Props> {
	render () {
		return (
			<div className="DefineColors card card-body">
				<div className="row">
					<div className="form-group col">
						<label htmlFor="DefineColors-define-foreground">
							Foreground color
						</label>
						<input
							id="DefineColors-define-foreground"
							className="form-control"
							type="text"
							value={this.props.foreground}
							onChange={this.handleChangeForeground}
						/>
					</div>
					<div className="form-group col">
						<label htmlFor="DefineColors-define-background">
							Background color
						</label>
						<input
							id="DefineColors-define-background"
							className="form-control"
							type="text"
							value={this.props.background}
							onChange={this.handleChangeBackground}
						/>
					</div>
				</div>
				<button
					className="btn btn-light col-2"
					type="button"
					onClick={this.props.swapForegroundBackground}
				>
					Swap
				</button>
			</div>
		);
	}

	private handleChangeForeground = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.props.setForeground(e.currentTarget.value);
	}

	private handleChangeBackground = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.props.setBackground(e.currentTarget.value);
	}
}
