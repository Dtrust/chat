import React from 'react';
import { UploadField } from '@navjobs/upload'

import { Input, Typography } from 'antd';
import { SmileOutlined, PaperClipOutlined, AudioOutlined, SendOutlined, CloseCircleFilled } from '@ant-design/icons/lib/icons';
import { Picker } from 'emoji-mart';

import { UploadFiles } from '../../components';

import './DialogInput.scss'
import classNames from 'classnames';


const { TextArea } = Input
const { Text } = Typography;


const DialogInput = props => {

	const {
		emojiPickerVisible,
		toggleEmojiPicker,
		addEmoji,
		value,
		setValue,
		attachments,
		removeAttachment,
		onSelectFiles,
		sendMessage,
		onKeySendMessage,
		onRecord,
		isRecord,
		onStopRecord
	} = props;

	return (
		<div className='dialog-input'>
			{isRecord ? (
				<div className='dialog-input__actions--record record'>
					<Text
						type="danger"
						strong
						className='record-txt'
					>
						Recording...
					</Text>
					<button
						onClick={onStopRecord}
					>
						<CloseCircleFilled
							style={{ color: 'rgba(230,30,55,1)' }}
						/>
					</button>
				</div>
			) : (
				<div className='dialog-input__wrap'>
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
					{attachments.length > 0 && (
						<UploadFiles
							removeAttachment={removeAttachment}
							attachments={attachments}
						/>
					)}
				</div>
			)}
			<div className='dialog-input__actions'>
				<UploadField
					onFiles={onSelectFiles}
					containerProps={{
						className: 'dialog-input__actions-btn btn-upload'
					}}
					uploadProps={{
						accept: '.pdf,.doc,.docx,.txt,.rtf,.jpg,.jpeg,.png,.gif',
						multiple: "multiple",
					}}
				>
					<button
						className={classNames({
							'hidden': isRecord
						})}
					>
						<PaperClipOutlined />
					</button>
				</UploadField>
				{isRecord || value ? (
					<button
						className='dialog-input__actions-btn btn-send'
						onClick={sendMessage}
					>
						<SendOutlined />
					</button>
				) : (
					<button
						onClick={onRecord}
						className='dialog-input__actions-btn btn-audio'
					>
						<AudioOutlined />
					</button>
				)}
			</div>

		</div>
	);
};

export default DialogInput;
