import { ChangeEventHandler, memo } from 'react';
import classes from './TextInput.module.scss';

export interface TextInputProps {
	className?: string;
	name?: string;
	value?: string | number | string[];
	changed?: ChangeEventHandler<HTMLInputElement>;
	placeholder?: string;
	required?: boolean;
	focus?: boolean;
}

const TextInput = ({ className, name, value, changed, placeholder, required, focus }: TextInputProps) => (
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

export default memo(TextInput);
