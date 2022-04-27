import React from 'react';

import { EllipsisOutlined } from '@ant-design/icons/lib/icons';

import { Messages, DialogInput, Status } from '../../containers'
import { Sidebar } from '../../containers'

import './Chat.scss';


const Chat = () => {

	return (
		<section className='chat'>

			<Sidebar/>

			<div className='chat-dialog dialog'>

				<div className='dialog-header'>

					<Status/>

					<button className='dialog-header__btn btn-dots'>
						<EllipsisOutlined className='dialog-header__icon icon icon--dots' style={{fontSize: '22px'}} />
					</button>

				</div>

				<Messages items/>

				<DialogInput/>

			</div>

		</section>
	);
};

export default Chat;
