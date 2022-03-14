import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'

import { ReadIcon, Avatar } from '../../components';

import './DialogItem.scss';


const getMessageTime = created_at => {
	if(isToday(new Date(created_at))) {
		return format(new Date(created_at), 'HH:mm')
	} else {
		return format(new Date(created_at), 'dd.MM.yyyy')
	}
};

const DialogItem = ({ _id, user, text, created_at, unread, isMe, onSelect, currentDialogId }) => (
	<div
		className={
			classNames('dialogs-item', {
				'dialogs-item--online': user.isOnline,
				'active': currentDialogId === _id,
			})
		}
		onClick={onSelect.bind(this, _id)}
	>
		<div className='dialogs-item__avatar'>
			<Avatar user={user} />
		</div>
		<div className='dialogs-item__wrap'>
			<div className='dialogs-item__top'>
				<p className='dialogs-item__name'>
					{user.fullName}
				</p>
				<p className='dialogs-item__time'>
					{getMessageTime(created_at)}
				</p>
			</div>
			<div className='dialogs-item__bottom'>
				<p className='dialogs-item__message'>
					{text}
				</p>
				<div className='dialogs-item__icon'>
					{isMe && <ReadIcon isMe={true} isRead={true}/>}
					{unread > 0 && (
						<span className='dialogs-item__icon--mark'>
							<span className='dialogs-item__icon--count'>{unread > 9 ? '+9' : unread}</span>
						</span>
					)}
				</div>
			</div>
		</div>
	</div>
)

export default DialogItem;
