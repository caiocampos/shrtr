import React from 'react';
import classes from './TextInput.module.scss';

const TextInput = ({ className, name, value, changed, placeholder, required, focus }) => (
	<span className={classes.TextInput}>
		<input
			type="text"
			className={className}
			name={name}
			value={value}
			onChange={changed}
			placeholder={placeholder}
			required={required}
			autoFocus={focus}
		/>
	</span>
);

export default React.memo(TextInput);
