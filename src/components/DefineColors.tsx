import * as React from 'react';

export interface Props {
	foreground: string;
	background: string;
	setForeground: (foreground: string) => void;
	setBackground: (background: string) => void;
	swapForegroundBackground: () => void;
}

export default class DefineColors extends React.Component<Props> {
	render () {
		return (
			<div>
				<label htmlFor="define-foreground">Foreground color</label><br />
				<input
					id="define-foreground"
					type="text"
					value={this.props.foreground}
					onChange={this.handleChangeForeground}
				/>

				<br />

				<label htmlFor="define-background">Background color</label><br />
				<input
					id="define-background"
					type="text"
					value={this.props.background}
					onChange={this.handleChangeBackground}
				/>

				<br />

				<button
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
