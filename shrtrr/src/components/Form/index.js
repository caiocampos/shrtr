import React from 'react';
import classes from './Form.module.scss';
import TextInputList from './TextInputList';

const Form = props => (
	<div className={classes.Form}>
		<span className={props.className}>
			<form onSubmit={props.submited}>
				{props.children}
				<TextInputList inputs={props.textInputList}/>
				<input
					type='submit'
					value={props.submitText}
					disabled={props.locked}
				/>
			</form>
		</span>
	</div>
);

export default React.memo(Form);
