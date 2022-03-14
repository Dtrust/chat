import React from 'react';
import PropTypes from 'prop-types';
import {Empty} from 'antd';

import {Message} from '../index';
import background from '../../assets/img/chat-bg.jpg';


const Messages = ({ items }) => {
	return items ? (

		<div className='dialog-content' style={{backgroundImage:`linear-gradient(rgba(238, 238, 238, 0.7), rgba(238, 238, 238, 0.7)), url(${background})`}}>
			<Message
				avatar='https://i.pinimg.com/736x/a1/a4/e5/a1a4e578b75a2cad9024571012b17f14.jpg'
				date='Sun Apr 21 2019 21:30:07'
				audio='https://notificationsounds.com/storage/sounds/file-sounds-1206-you-have-a-new-message.mp3'
			/>


			<Message
				avatar='https://i.pinimg.com/736x/a1/a4/e5/a1a4e578b75a2cad9024571012b17f14.jpg'
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
				date='Sun Apr 21 2019 21:30:07'
				attachments={[
					{
						filename: 'image.jpg',
						url: 'https://source.unsplash.com/100x100/?random=1&nature',
					}
				]}
			/>
			<Message
				avatar='https://i.pinimg.com/736x/a1/a4/e5/a1a4e578b75a2cad9024571012b17f14.jpg'
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
				date='Sun Apr 21 2019 21:30:07'
			/>
			<Message
				avatar='https://i.pinimg.com/736x/a1/a4/e5/a1a4e578b75a2cad9024571012b17f14.jpg'
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
				date='Sun Apr 21 2019 21:30:07'
				attachments={[
					{
						filename: 'image.jpg',
						url: 'https://source.unsplash.com/100x100/?random=1&nature',
					},
					{
						filename: 'image.jpg',
						url: 'https://source.unsplash.com/100x100/?random=2&nature',
					},
					{
						filename: 'image.jpg',
						url: 'https://source.unsplash.com/100x100/?random=3&nature',
					},
				]}
				isMe={true}
				isRead={false}
			/>
			<Message
				avatar='https://i.pinimg.com/736x/a1/a4/e5/a1a4e578b75a2cad9024571012b17f14.jpg'
				isTyping
			/>
			<Message
				avatar='https://i.pinimg.com/736x/a1/a4/e5/a1a4e578b75a2cad9024571012b17f14.jpg'
				attachments={[
					{
						filename: 'image.jpg',
						url: 'https://source.unsplash.com/100x100/?random=1&nature',
					},
				]}
				date='Sun Apr 21 2019 21:30:07'
			/>
		</div>

	) : (
		<div className='dialog-content dialog-content--empty' style={{backgroundImage:`linear-gradient(rgba(244, 244, 244, .9), rgba(244, 244, 244, .9)), url(${background})`}}>
			<Empty
				description='No messages'
			/>
		</div>
	)
}

Messages.propTypes = {
	items: PropTypes.array,
}

export default Messages
