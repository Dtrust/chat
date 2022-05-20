import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { filesApi } from '../utils/api';
import socket from '../core/socket';

import { DialogInput as DialogInputBase } from '../components';
import { messagesActions, attachmentsActions } from '../redux/actions';


const DialogInput = props => {

	const {
		dialogs: { currentDialogId },
		attachments,
		fetchSendMessage,
		setAttachments,
		removeAttachment,
		user,
	} = props;

	window.navigator.getUserMedia =
		window.navigator.getUserMedia ||
		window.navigator.mozGetUserMedia ||
		window.navigator.msGetUserMedia ||
		window.navigator.webkitGetUserMedia;

	const [value, setValue] = useState('');
	const [isRecord, setIsRecord] = useState(false);
	const [mediaRecorder, setMediaRecorder] = useState(null);
	const [emojiPickerVisible, setShowEmojiPicker] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const onRecord = () => {
		if (navigator.getUserMedia) {
			navigator.getUserMedia({ audio: true }, onRecording, onError)
		}
	}

	const onRecording = (stream) => {
		const recorder = new MediaRecorder(stream)
		setMediaRecorder(recorder);

		recorder.start();

		recorder.onstart = () => {
			setIsRecord(true)
		};

		recorder.onstop = () => {
			setIsRecord(false)
		};

		recorder.ondataavailable = (e) => {

			const file = new File([e.data], 'audio.webm');

			setIsLoading(true);

			filesApi.upload(file).then(({ data }) => {
				sendAudio(data.file._id);
			}).then(() => {
				setIsLoading(false);
			});
		}
	}

	const onError = (err) => {
		console.log(`Record ERROR: ${err}`)
	}

	const toggleEmojiPicker = () => {
		setShowEmojiPicker(!emojiPickerVisible);
	};

	const handleOutsideClick = (el, e) => {
		if (el && !el.contains(e.target)) {
			setShowEmojiPicker(false);
		}
	};

	const addEmoji = ({colons}) => {
		setValue((`${value} ${colons}`).trim())
	};

	const handleStartRecord = () => {
		setIsRecord(true);
	};

	const onHideRecord = () => {
		setIsRecord(false);
	};

	const onSelectFiles = async files => {
		let uploaded = [];
		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			const uid = Math.round(Math.random() * 1000);
			uploaded = [
				...uploaded,
				{
					uid,
					name: file.name,
					status: 'uploading',
				},
			];
			setAttachments(uploaded);
			await filesApi.upload(file).then(({ data }) => {
				uploaded = uploaded.map(item => {
					if (item.uid === uid) {
						return {
							status: 'done',
							uid: data.file._id,
							name: data.file.filename,
							url: data.file.url,
						};
					}
					return item;
				});
			});
		}
		setAttachments(uploaded);
	};

	const sendAudio = (audioId) => {
		return fetchSendMessage({
			text: 'Voice message',
			dialogId: currentDialogId,
			attachments: [audioId],
		});
	};

	const sendMessage = () => {
		if (isRecord) {
			mediaRecorder.stop();
		} else if (value || attachments.length) {
			fetchSendMessage({
				text: value,
				dialogId: currentDialogId,
				attachments: attachments.map(file => file.uid),
			});
			setValue('');
			setAttachments([]);
		}
	};

	const handleSendMessage = (e) => {

		socket.emit('DIALOGS:TYPING', {dialogId: currentDialogId, user});

		if (e.keyCode === 13) {
			sendMessage();
		}
	};

	useEffect(() => {
		const el = document.querySelector('.dialog-input__emoji');

		document.addEventListener('click', handleOutsideClick.bind(this, el));

		return () => {
			document.removeEventListener('click', handleOutsideClick.bind(this, el));
		}
	}, []);

	if (!currentDialogId) {
		return null
	}

	return <DialogInputBase
		value={value}
		setValue={setValue}
		emojiPickerVisible={emojiPickerVisible}
		toggleEmojiPicker={toggleEmojiPicker}
		onKeySendMessage={handleSendMessage}
		addEmoji={addEmoji}
		handleSendMessage={handleSendMessage}
		attachments={attachments}
		onSelectFiles={onSelectFiles}
		removeAttachment={removeAttachment}
		sendMessage={sendMessage}
		isRecord={isRecord}
		onRecord={onRecord}
		onHideRecord={onHideRecord}
		isLoading={isLoading}
	/>;

};


export default connect(
	({ dialogs, attachments, user }) => ({
		dialogs,
		attachments: attachments.items,
		user: user.data,
	}),
	{ ...messagesActions, ...attachmentsActions },
)(DialogInput);
