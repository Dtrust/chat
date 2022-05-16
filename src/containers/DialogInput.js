import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { filesApi } from '../utils/api';

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
			const audioURL = window.URL.createObjectURL(e.data);
			new Audio(audioURL).play();
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

	const onStopRecord = () => {
		mediaRecorder.stop();
	}

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

	const sendMessage = () => {
		fetchSendMessage(value, currentDialogId, attachments.map(file => file.uid));
		setValue('');
		setAttachments([]);
	};

	const handleSendMessage = () => {
		sendMessage();
	};

	const onKeySendMessage = (e) => {
		if (e.keyCode === 13) {
			handleSendMessage();
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
		// handleOutsideClick={handleOutsideClick}
		toggleEmojiPicker={toggleEmojiPicker}
		onKeySendMessage={onKeySendMessage}
		addEmoji={addEmoji}
		handleSendMessage={handleSendMessage}
		// onSendMessage={fetchSendMessage}
		// currentDialogId={currentDialogId}
		attachments={attachments}
		onSelectFiles={onSelectFiles}
		sendMessage={sendMessage}
		isRecord={isRecord}
		onRecord={onRecord}
		onStopRecord={onStopRecord}
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
