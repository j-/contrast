import * as React from 'react';

export interface Props extends React.TdHTMLAttributes<HTMLTableDataCellElement> {

}

const Td: React.StatelessComponent<Props> = (props) => (
	<td {...props} />
);

export default Td;
