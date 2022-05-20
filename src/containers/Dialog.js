import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import find from 'lodash/find';

import { messagesActions } from '../redux/actions';

import {Empty} from 'antd';

import socket from '../core/socket';

import { Dialog as BaseDialog } from '../components';


const Dialog = (
	{
		currentDialog,
		fetchMessages,
		addMessage,
		items,
		user,
		isLoading,
		removeMessageById,
		attachments
	}) => {

	console.log('currentDialog', currentDialog)

	const [previewImage, setPreviewImage] = useState(null);
	const [dialogHeight, setDialogHeight] = useState(120);
	const [isTyping, setIsTyping] = useState(false);
	let typingTimeoutId = null;

	const onClosePreviewImage = () => {
		setPreviewImage(null);
	};

	const messagesRef = useRef(null);

	const getNewMessage = (data) => {
		addMessage(data);
	};

	const toggleIsTyping = () => {
		setIsTyping(true);

		clearInterval(typingTimeoutId);

		typingTimeoutId = setTimeout(() => {
			setIsTyping(false);
		}, 2000)
	};

	useEffect(() => {
		socket.on('DIALOGS:TYPING', toggleIsTyping);
	}, []);

	useEffect(() => {
		if(currentDialog) {
			fetchMessages(currentDialog._id)
		}
		socket.on('SERVER:NEW_MESSAGE', getNewMessage);

		return () => {
			socket.removeListener('SERVER:NEW_MESSAGE', getNewMessage);
		}

	}, [currentDialog]);

	useEffect(() => {
		if (currentDialog) {
			messagesRef.current.scrollTo(0, 999999);
		}
	}, [items, isTyping]);

	//This numbers is px height 120 - without input attachments, 245 - with input attachments
	useEffect(() => {
		if (attachments.length) {
			setDialogHeight(245)
		} else {
			setDialogHeight(120)
		}
	},[attachments])

	if (!currentDialog) {
		return <Empty description='Please, open dialog'/>
	}

	return (
		<BaseDialog
			user={user}
			blockRef={messagesRef}
			items={items}
			isLoading={isLoading && !user}
			handleRemoveMessage={removeMessageById}
			setPreviewImage={setPreviewImage}
			previewImage={previewImage}
			onClosePreviewImage={onClosePreviewImage}
			dialogHeight={dialogHeight}
			isTyping={isTyping}
			partner={user._id !== currentDialog.partner._id ? currentDialog.author : currentDialog.partner}
		/>
	)
};


export default connect(({ dialogs, messages, user, attachments }) => ({
	currentDialog: find(dialogs.items, { _id: dialogs.currentDialogId }),
	items: messages.items,
	isLoading: messages.isLoading,
	attachments: attachments.items,
	user: user.data,
	}), messagesActions
)(Dialog);
