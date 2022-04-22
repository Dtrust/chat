import React from 'react';

import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons/lib/icons';

import { Dialogs, Messages, DialogInput, Status } from '../../containers'

import './Chat.scss';


const Chat = () => {

	return (
		<section className='chat'>
			<div className='chat-sidebar sidebar'>

				<div className='sidebar-header'>
					<div className='sidebar-header__wrap'>
						<TeamOutlined className='sidebar-header__icon icon icon--team' />
						<p className='sidebar-header__title'>Contacts List</p>
					</div>
					<button className='sidebar-header__btn btn-edit'>
						<FormOutlined className='sidebar-header__icon icon icon--edit' />
					</button>
				</div>

				<Dialogs userId={0} />

			</div>

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
