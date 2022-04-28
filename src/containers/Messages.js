import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { messagesActions } from '../redux/actions';

import {Empty} from 'antd';

import socket from '../core/socket';

import { Messages as BaseMessages } from '../components';


const Dialogs = (
	{
		currentDialogId,
		fetchMessages,
		addMessage,
		items,
		user,
		isLoading,
		removeMessageById,
	}) => {

	if (!currentDialogId) {
		return <Empty description='Please, open dialog'/>
	}

	const messagesRef = useRef(null);

	const getNewMessage = (data) => {
		addMessage(data)
	}

	useEffect(() => {
		if(currentDialogId) {
			fetchMessages(currentDialogId)
		}
		socket.on('SERVER:NEW_MESSAGE', getNewMessage);

		return () => {
			socket.removeListener('SERVER:NEW_MESSAGE', getNewMessage);
		}

	}, [currentDialogId]);

	useEffect(() => {
		messagesRef.current.scrollTo(0, 99999);
	}, [items]);

	return (
		<BaseMessages
			user={user}
			blockRef={messagesRef}
			items={items}
			isLoading={isLoading && !user}
			handleRemoveMessage={removeMessageById}
		/>
	)
};


export default connect(({ dialogs, messages, user }) => ({
	currentDialogId: dialogs.currentDialogId,
	items: messages.items,
	isLoading: messages.isLoading,
	user: user.data,
	}), messagesActions
)(Dialogs);
