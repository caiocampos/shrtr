import { FormEventHandler, JSX, memo, ReactNode } from 'react';
import classes from './Form.module.scss';
import TextInputList from './TextInputList';
import { TextInputProps } from '../TextInput';

interface FormProps {
	className?: string;
	submited?: FormEventHandler<HTMLFormElement>;
	children?: ReactNode;
	textInputList?: TextInputProps[];
	submitText?: string | number | string[];
	locked?: boolean;
}

const Form = ({ className, submited, children, textInputList, submitText, locked }: FormProps): JSX.Element => (
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

export default memo(Form);
