import React, { useState, useEffect } from 'react';
import { UploadField } from '@navjobs/upload'

import {Input} from 'antd';
import { SmileOutlined, PaperClipOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons/lib/icons';
import { Picker } from 'emoji-mart';

import { UploadFiles } from '../../components';

import './DialogInput.scss'


const { TextArea } = Input


const DialogInput = props => {

	const [value, setValue] = useState('');
	const [emojiPickerVisible, setShowEmojiPicker] = useState('');

	const { onSendMessage, currentDialogId } = props;

	const toggleEmojiPicker = () => {
		setShowEmojiPicker(!emojiPickerVisible);
		// setValue('');
	};

	const handleSendMessage = () => {
		onSendMessage(value, currentDialogId);
		setValue('');
	}

	const onKeySendMessage = (e) => {
		if (e.keyCode === 13) {
			handleSendMessage();
		}
	}

	const addEmoji = ({colons}) => {
		setValue((`${value} ${colons}`).trim())
	}

	const handleOutsideClick = (el, e) => {
		if (el && !el.contains(e.target)) {
			setShowEmojiPicker(false);
		}
	}

	useEffect(() => {
		const el = document.querySelector('.dialog-input__emoji');
		console.log(el)
		document.addEventListener('click', handleOutsideClick.bind(this, el));

		return () => {
			document.removeEventListener('click', handleOutsideClick.bind(this, el));
		}
	}, []);


	return (
		<div className='dialog-input'>
			<div className='dialog-input__emoji'>
				{ emojiPickerVisible && <Picker onSelect={(emojiTag) => addEmoji(emojiTag)} style={{ position: 'absolute', bottom: '55px'}} set='apple'/>}
				<button onClick={toggleEmojiPicker} className='dialog-input__btn btn-emoji'>
					<SmileOutlined />
				</button>
			</div>
			<TextArea
				onChange={e => setValue(e.target.value)}
				onKeyUp={onKeySendMessage}
				className='dialog-input__field'
				size='large'
				value={value}
				autoSize
			/>
			<div className='dialog-input__actions'>
				<UploadField
					onFiles={files => console.log(files)}
					containerProps={{
						className: 'dialog-input__actions-btn btn-upload'
					}}
					uploadProps={{
						accept: '.pdf,.doc,.docx,.txt,.rtf,.jpg,.jpeg,.png,.gif',
						multiple: "multiple",
					}}
				>
					<button>
						<PaperClipOutlined />
					</button>
				</UploadField>
				{value ? (
					<button
						className='dialog-input__actions-btn btn-send'
						onClick={handleSendMessage}
					>
						<SendOutlined />
					</button>
				) : (
					<button className='dialog-input__actions-btn btn-audio'>
						<AudioOutlined />
					</button>
				)
				}
			</div>
			{/*<div>*/}
			{/*	<UploadFiles/>*/}
			{/*</div>*/}
		</div>
	);
};

export default DialogInput;
