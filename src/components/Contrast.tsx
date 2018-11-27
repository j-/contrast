import * as React from 'react';

export interface Props {
	contrastRatio: string | null;
}

const Contrast: React.StatelessComponent<Props> = ({ contrastRatio }) => (
	<div className="Contrast display-4">
		{
			contrastRatio !== null ?
				contrastRatio :
				'?'
		}
	</div>
);

export default Contrast;
