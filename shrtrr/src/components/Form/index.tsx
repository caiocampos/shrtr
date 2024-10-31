import React from 'react';
import classes from './Form.module.scss';
import TextInputList from './TextInputList';
import { TextInputProps } from '../TextInput';

interface FormProps {
	className?: string;
	submited?: React.FormEventHandler<HTMLFormElement>;
	children?: React.ReactNode;
	textInputList?: TextInputProps[];
	submitText?: string | number | string[];
	locked?: boolean;
}

const Form = ({ className, submited, children, textInputList, submitText, locked }: FormProps): React.JSX.Element => (
	<div className={classes.Form}>
		<span className={className}>
			<form onSubmit={submited}>
				{children}
				<TextInputList inputs={textInputList} />
				<input type="submit" value={submitText} disabled={locked} />
			</form>
		</span>
	</div>
);

export default React.memo(Form);
