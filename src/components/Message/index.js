import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Message.scss'


const Message = ({ user, avatar, text, date, isMe }) => (
	<div className={classNames('message', {'message--my' : isMe})}>
		<div className="message-avatar">
			<img className='message-avatar__img' src={avatar} alt={`Avatar ${user.fullName}`}/>
		</div>
		<div className="message-content">
			<div className="message-content__bubble">
				<p className='message-content__text'>{text}</p>
			</div>
			<span className="message-content__date">{formatDistanceToNow(new Date(date), {addSuffix: true})}</span>
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
}

export default Message;
