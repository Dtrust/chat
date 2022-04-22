import React, { useState } from 'react';
import { UploadField } from '@navjobs/upload'

import {Input} from 'antd';
import { SmileOutlined, PaperClipOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons/lib/icons';
import { Picker } from 'emoji-mart';

import './DialogInput.scss'


const DialogInput = props => {

	const [value, setValue] = useState('');
	const [emojiPickerVisible, setShowEmojiPicker] = useState('');

	const { onSendMessage, currentDialogId } = props;

	const toggleEmojiPicker = () => {
		setShowEmojiPicker(!emojiPickerVisible);
		setValue('');
	};

	const handleSendMessage = (e) => {
		if (e.keyCode === 13) {
			onSendMessage(value, currentDialogId)
		}
	}

	return (
		<div className='dialog-input'>
			<div className='dialog-input__emoji'>
				{ emojiPickerVisible && <Picker style={{ position: 'absolute', bottom: '55px'}} set='apple'/>}
				<button onClick={toggleEmojiPicker} className='dialog-input__btn btn-emoji'>
					<SmileOutlined />
				</button>
			</div>
			<Input
				onChange={e => setValue(e.target.value)}
				onKeyUp={handleSendMessage}
				className='dialog-input__field'
				size='large'
				value={value}
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
					<button className='dialog-input__actions-btn btn-send'>
						<SendOutlined />
					</button>
				) : (
					<button className='dialog-input__actions-btn btn-audio'>
						<AudioOutlined />
					</button>
				)
				}
			</div>
		</div>
	);
};

export default DialogInput;
