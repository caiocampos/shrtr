import React from 'react';
import ReactDOM from 'react-dom';
import ShrtrServiceResponse, {ShrtrServiceResponseObject} from './index';

it('renders ShrtrServiceResponse without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ShrtrServiceResponse />, div);
});

it('renders ShrtrServiceResponseObject without crashing', () => {
	const obj = new ShrtrServiceResponseObject('/');
	const div = document.createElement('div');
	ReactDOM.render(obj.generate(), div);
});