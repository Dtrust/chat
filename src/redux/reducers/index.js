import { combineReducers } from 'redux';

import dialogs from './dialogs';
import messages from './messages';
import user from './user';


const reducers = ['dialogs', 'messages', 'user',];


export default combineReducers(
	reducers.reduce((initial, name) => {
		initial[name] = require(`./${name}`).default;
		return initial;
	},{})
);
