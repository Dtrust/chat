import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';

import { ReadIcon, Avatar } from '../../components';

import './DialogItem.scss';


const getMessageTime = createdAt => {
	if(isToday(new Date(createdAt))) {
		return format(new Date(createdAt), 'HH:mm')
	} else {
		return format(new Date(createdAt), 'dd.MM.yyyy')
	}
};

const DialogItem = (
	{
		_id,
		user,
		partner,
		text,
		createdAt,
		unread,
		isMe,
		// onSelect,
		currentDialogId,
		lastMessage
	}) => (
	<Link to={`/dialog/${_id}`}>
		<div
			className={
				classNames('dialogs-item', {
					'dialogs-item--online': partner.isOnline,
					'active': currentDialogId === _id,
				})
			}
			// onClick={onSelect.bind(this, _id)}
		>
			<div className='dialogs-item__avatar'>
				<Avatar user={partner} />
			</div>
			<div className='dialogs-item__wrap'>
				<div className='dialogs-item__top'>
					<p className='dialogs-item__name'>
						{partner.username}
					</p>
					<p className='dialogs-item__time'>
						{getMessageTime(lastMessage.createdAt)}
					</p>
				</div>
				<div className='dialogs-item__bottom'>
					<p className='dialogs-item__message'>
						{lastMessage.text}
					</p>
					<div className='dialogs-item__icon'>
						{isMe && <ReadIcon isMe={isMe} isRead={lastMessage.unread}/>}
						{unread > 0 && (
							<span className='dialogs-item__icon--mark'>
								<span className='dialogs-item__icon--count'>{unread > 9 ? '+9' : unread}</span>
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	</Link>
)

export default DialogItem;
