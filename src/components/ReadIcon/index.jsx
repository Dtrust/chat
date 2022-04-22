import React from 'react';
import PropTypes from 'prop-types';

import readIcon from '../../assets/img/readed.svg';
import noReadIcon from '../../assets/img/noreaded.svg';


const ReadIcon = ({ isMe, isRead }) => (
	isMe && (
		isRead ? (
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
		))
)

ReadIcon.propTypes = {
	isMe: PropTypes.bool,
	isRead: PropTypes.bool,
}

export default ReadIcon
