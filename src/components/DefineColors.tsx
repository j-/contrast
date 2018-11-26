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
			<div className="pt-card">
				<label
					htmlFor="define-foreground"
					className="pt-label"
				>
					Foreground color
					<input
						id="define-foreground"
						className="pt-input pt-fill"
						type="text"
						value={this.props.foreground}
						onChange={this.handleChangeForeground}
					/>
				</label>
				<label
					htmlFor="define-background"
					className="pt-label"
				>
					Background color
					<input
						id="define-background"
						className="pt-input pt-fill"
						type="text"
						value={this.props.background}
						onChange={this.handleChangeBackground}
					/>
				</label>
				<button
					className="pt-button"
					type="button"
					onClick={this.props.swapForegroundBackground}
				>
					<span className="pt-icon-standard pt-icon-swap-vertical" />
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
