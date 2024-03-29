import React from 'react';
import TextInput from '../TextInput';

const renderInput = ({ className, name, value, changed, placeholder, required, focus }, i) => (
	<TextInput
		key={i}
		className={className}
		name={name}
		value={value}
		changed={changed}
		placeholder={placeholder}
		required={required}
		focus={focus}
	/>
);

const TextInputList = ({ inputs }) => (!(inputs instanceof Array) ? null : inputs.map(renderInput));

export default React.memo(TextInputList);
