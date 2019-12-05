import React from 'react';
import classes from './TextInput.module.scss';

const TextInput = props => (
	<span className={classes.TextInput}>
		<input
			type='text'
			className={props.className}
			name={props.name}
			value={props.value}
			onChange={props.changed}
			placeholder={props.placeholder}
			required={props.required}
			autoFocus={props.focus}
		/>
	</span>
);

export default React.memo(TextInput);
