import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import readIcon from '../../assets/img/readed.svg';
import noReadIcon from '../../assets/img/noreaded.svg';

import './Message.scss'


const Message = ({ user, avatar, text, date, isMe, isRead, attachments }) => (
	<div className={classNames('message', {'message--my' : isMe})}>
		<div className="message-avatar">
			<img className='message-avatar__img' src={avatar} alt={`Avatar ${user.fullName}`}/>
		</div>
		<div className="message-content">
			<div className="message-content__bubble">
				<p className='message-content__text'>{text}</p>
				<div className='message-content__attachments'>
					{attachments && attachments.map(item => (
						<div className='message-content__attachments-item'>
							<img src={item.url} alt={item.filename}/>
						</div>
					))}
				</div>
			</div>
			<span className="message-content__date">{formatDistanceToNow(new Date(date), {addSuffix: true})}</span>
			{isMe && isRead ?(
				<img
					className='message-content__icon'
					src={readIcon}
					alt='read icon'
				/>
			) : (
				<img
					className='message-content__icon'
					src={noReadIcon}
					alt='no read icon'
				/>
			)
			}
		</div>
	</div>
);

Message.defaultProps = {
	user: {}
}

Message.propTypes = {
	user: PropTypes.object,
	avatar: PropTypes.string,
	text: PropTypes.string,
	date: PropTypes.string,
	attachments: PropTypes.array,
}

export default Message;
