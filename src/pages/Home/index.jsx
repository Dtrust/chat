import React from 'react';

import { Message, DialogItem } from '../../components'
import './Home.scss';


const Home = () => {
	return (
		<section className='home'>

			<div className='dialogs'>
				<DialogItem
					user={{
					fullname: 'Some NAme',
					isOnline: true,
					}}
					unread={999}
				/>
				<DialogItem
					user={{
						fullname: 'Some NAme',
						isOnline: true,
					}}
					unread={999}
				/>
				<DialogItem
					user={{
						fullname: 'Some NAme',
						isOnline: true,
					}}
					unread={999}
				/>
				<DialogItem
					user={{
						fullname: 'Some NAme',
						isOnline: true,
					}}
					unread={999}
				/>
				<DialogItem
					user={{
						fullname: 'Some NAme',
						isOnline: true,
					}}
					unread={999}
				/>
			</div>
			{/*<Dialogs items={[*/}
			{/*	{*/}
			{/*		user: {*/}
			{/*			fullname: 'Firstname Lastname',*/}
			{/*			avatar: null,*/}
			{/*		},*/}
			{/*		message: {*/}
			{/*			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',*/}
			{/*			isRead: false,*/}
			{/*			created_at: new Date() */}
			{/*		}*/}
			{/*		*/}
			{/*	}*/}
			{/*]}/>*/}


			{/*<Message*/}
			{/*	avatar='https://i.pinimg.com/736x/a1/a4/e5/a1a4e578b75a2cad9024571012b17f14.jpg'*/}
			{/*	text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"*/}
			{/*	date='Sun Apr 21 2019 21:30:07'*/}
			{/*	attachments={[*/}
			{/*		{*/}
			{/*			filename: 'image.jpg',*/}
			{/*			url: 'https://source.unsplash.com/100x100/?random=1&nature',*/}
			{/*		}*/}
			{/*	]}*/}
			{/*/>*/}
			{/*<Message*/}
			{/*	avatar='https://i.pinimg.com/736x/a1/a4/e5/a1a4e578b75a2cad9024571012b17f14.jpg'*/}
			{/*	text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"*/}
			{/*	date='Sun Apr 21 2019 21:30:07'*/}
			{/*/>*/}
			{/*<Message*/}
			{/*	avatar='https://i.pinimg.com/736x/a1/a4/e5/a1a4e578b75a2cad9024571012b17f14.jpg'*/}
			{/*	text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"*/}
			{/*	date='Sun Apr 21 2019 21:30:07'*/}
			{/*	attachments={[*/}
			{/*		{*/}
			{/*			filename: 'image.jpg',*/}
			{/*			url: 'https://source.unsplash.com/100x100/?random=1&nature',*/}
			{/*		},*/}
			{/*		{*/}
			{/*			filename: 'image.jpg',*/}
			{/*			url: 'https://source.unsplash.com/100x100/?random=2&nature',*/}
			{/*		},*/}
			{/*		{*/}
			{/*			filename: 'image.jpg',*/}
			{/*			url: 'https://source.unsplash.com/100x100/?random=3&nature',*/}
			{/*		},*/}
			{/*	]}*/}
			{/*	isMe={true}*/}
			{/*	isRead={false}*/}
			{/*/>*/}
			{/*<Message*/}
			{/*	avatar='https://i.pinimg.com/736x/a1/a4/e5/a1a4e578b75a2cad9024571012b17f14.jpg'*/}
			{/*	isTyping*/}
			{/*/>*/}
			{/*<Message*/}
			{/*	avatar='https://i.pinimg.com/736x/a1/a4/e5/a1a4e578b75a2cad9024571012b17f14.jpg'*/}
			{/*	attachments={[*/}
			{/*		{*/}
			{/*			filename: 'image.jpg',*/}
			{/*			url: 'https://source.unsplash.com/100x100/?random=1&nature',*/}
			{/*		},*/}
			{/*	]}*/}
			{/*/>*/}

		</section>
	);
};

export default Home;
