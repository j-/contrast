import * as React from 'react';

export interface Props {
	contrastRatio: string | null;
}

const Unknown: React.StatelessComponent = () => <div><em>Invalid colors</em></div>;

const Contrast: React.StatelessComponent<Props> = ({ contrastRatio }) => (
	contrastRatio ?
		<div>{contrastRatio}</div> :
		<Unknown />
);

export default Contrast;
