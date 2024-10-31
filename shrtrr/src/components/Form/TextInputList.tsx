import React from 'react';
import TextInput, { TextInputProps } from '../TextInput';

interface TextInputListProps {
	className?: string;
	inputs?: TextInputProps[];
}

const renderInput = ({ className, name, value, changed, placeholder, required, focus }: TextInputProps, i: number) => (
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

const TextInputList = ({ inputs }: TextInputListProps) => (!(inputs instanceof Array) ? null : inputs.map(renderInput));

export default React.memo(TextInputList);
