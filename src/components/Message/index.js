import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {ReadIcon, Time} from '../../components';

import './Message.scss'



const Message = ({ user, avatar, text, date, isMe, isRead, attachments, isTyping }) => (
	<div className={
		classNames('message',
			{
				'message--my' : isMe,
				'message--typing' : isTyping,
				'message--image' : !text && attachments && attachments.length === 1
			})
	}>
		<div className="message-avatar">
			<img className='message-avatar__img' src={avatar} alt={`Avatar ${user.fullName}`}/>
		</div>
		<div className="message-content">
			<div className="message-content__bubble">
				{text && (<p className='message-content__text'>{text}</p>)}
				{attachments && (
					<div className='message-content__attachments'>
						{attachments.map(item => (
							<div className='message-content__attachments-item'>
								<img src={item.url} alt={item.filename}/>
							</div>
						))}
					</div>
				)}
				{isTyping && (
					<div className='message-content--typing'>
						<span className='dot one'></span>
						<span className='dot two'></span>
						<span className='dot three'></span>
					</div>
				)}
			</div>
			{date && (
				<span className="message-content__date">
					<Time date={date}/>
				</span>)
			}
			<ReadIcon isMe={isMe} isRead={isRead}/>
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
	isTyping: PropTypes.bool,
	isMe: PropTypes.bool,
	isRead: PropTypes.bool,
}

export default Message;
