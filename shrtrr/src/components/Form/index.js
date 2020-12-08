import React from 'react';
import classes from './Form.module.scss';
import TextInputList from './TextInputList';

const Form = ({ className, submited, children, textInputList, submitText, locked }) => (
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
