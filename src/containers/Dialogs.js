import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { dialogsActions } from '../redux/actions';
import socket from '../core/socket';

import { Dialogs as BaseDialogs } from '../components';


const Dialogs = ({ fetchDialogs, currentDialogId, setCurrentDialogId, items, userId }) => {

	const [inputValue, setValue] = useState('');
	const [filtered, setFilteredItems] = useState(Array.from(items));

	const onChangeInput = (value = '') => {
		setFilteredItems(items.filter(
			dialog =>
				dialog.author.username.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
				dialog.partner.username.toLowerCase().indexOf(value.toLowerCase()) >= 0
			)
		)
		setValue(value);
	}

	const getNewDialogs = () => {
		fetchDialogs();
	}

	useEffect(() => {
		if (items.length) {
			onChangeInput('');
		}
	}, [items]);


	useEffect(() => {
		fetchDialogs();

		// if (!items.length) {
		// 	fetchDialogs();
		// } else {
		// 	setFilteredItems(items);
		// }
		socket.on("SERVER:DIALOG_CREATED",  getNewDialogs);
		socket.on("SERVER:NEW_MESSAGE",  getNewDialogs);

		return () => {
			socket.removeListener('SERVER:DIALOG_CREATED', getNewDialogs);
			socket.on("SERVER:NEW_MESSAGE",  getNewDialogs);
		}
	}, [])

	return (
		<BaseDialogs
			userId={userId}
			items={filtered}
			onSearch={onChangeInput}
			inputValue={inputValue}
			// onSelectDialog={setCurrentDialogId}
			currentDialogId={currentDialogId}
		/>
	)
};


export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
