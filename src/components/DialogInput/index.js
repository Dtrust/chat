import React, { useState } from 'react';
import { UploadField } from '@navjobs/upload'

import {Input} from 'antd';
import { Picker } from 'emoji-mart';

import './DialogInput.scss'
import { SmileOutlined, PaperClipOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons/lib/icons';


const DialogInput = props => {

	const [value, setValue] = useState('');
	const [emojiPickerVisible, setShowEmojiPicker] = useState('');

	const toggleEmojiPicker = () => {
		setShowEmojiPicker(!emojiPickerVisible)
	};

	return (
		<div className='dialog-input'>
			<div className='dialog-input__emoji'>
				{ emojiPickerVisible && <Picker style={{ position: 'absolute', bottom: '55px'}} set='apple'/>}
				<button onClick={toggleEmojiPicker} className='dialog-input__btn btn-emoji'>
					<SmileOutlined />
				</button>
			</div>
			<Input onChange={e => setValue(e.target.value)} className='dialog-input__field' size='large'/>
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
