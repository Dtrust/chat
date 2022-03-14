import React from 'react';

import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons/lib/icons';

import {Messages, Status, DialogInput} from '../../components';
import { Dialogs } from '../../containers'

import './Chat.scss';

import dialogsJSON from '../../dialogs.json'


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

				<Dialogs
					items={dialogsJSON}
				/>

			</div>

			<div className='chat-dialog dialog'>

				<div className='dialog-header'>
					<div className='dialog-header__wrap'>
						<p className='dialog-header__title'>
							Firstname Lastname
						</p>
						<div className='dialog-header__status'>
							<Status online/>
						</div>
					</div>
					<button className='dialog-header__btn btn-dots'>
						<EllipsisOutlined className='dialog-header__icon icon icon--dots' style={{fontSize: '22px'}} />
					</button>
				</div>

				<Messages/>

				<DialogInput/>

			</div>

		</section>
	);
};

export default Chat;
