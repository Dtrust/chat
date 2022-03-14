import React, { useState } from 'react';
import {Input} from 'antd';

import './DialogInput.scss'
import { SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons/lib/icons';


const DialogInput = props => {

	const [value, setValue] = useState('');

	return (
		<div className='dialog-input'>
			<button className='dialog-input__btn btn-smile'>
				<SmileOutlined />
			</button>
			<Input onChange={e => setValue(e.target.value)} className='dialog-input__field' size='large'/>
			<div className='dialog-input__actions'>
				<button className='dialog-input__actions-btn btn-camera'>
					<CameraOutlined />
				</button>
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
