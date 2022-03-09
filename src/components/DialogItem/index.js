import React from 'react';
import classNames from 'classnames';

import {ReadIcon, Time} from '../../components';

import './DialogItem.scss';


const getAvatar = avatar => {
	if(avatar) {
		return (
			<img
				className='dialogs-item__img'
				src='https://i.pinimg.com/736x/a1/a4/e5/a1a4e578b75a2cad9024571012b17f14.jpg'
				alt={`avatar`}
			/>
		)
	} else {
		// todo create avatar from name
	}
}

const DialogItem = ({ user, message, date, unread }) => (
	<div className={classNames('dialogs-item', {'dialogs-item--online': user.isOnline})}>
		<div className='dialogs-item__avatar'>
			{getAvatar('https://i.pinimg.com/736x/a1/a4/e5/a1a4e578b75a2cad9024571012b17f14.jpg')}
		</div>
		<div className='dialogs-item__wrap'>
			<div className='dialogs-item__top'>
				<p className='dialogs-item__name'>
					{user.fullname}
				</p>
				<p className='dialogs-item__time'>
					<Time date={new Date()}/>
				</p>
			</div>
			<div className='dialogs-item__bottom'>
				<p className='dialogs-item__message'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				</p>
				<div className='dialogs-item__icon'>
					{/*<ReadIcon isMe={true} isRead={false}/>*/}
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
