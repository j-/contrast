import * as React from 'react';

export interface Props {
	contrastRatio: number | null;
}

const Unknown: React.StatelessComponent = () => <div><em>Invalid colors</em></div>;

const Contrast: React.StatelessComponent<Props> = ({ contrastRatio }) => (
	contrastRatio ?
		<div>{Math.ceil(contrastRatio)}:1</div> :
		<Unknown />
);

export default Contrast;
