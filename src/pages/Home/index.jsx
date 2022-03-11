import React from 'react';

import { Message, Dialogs } from '../../components'
import './Home.scss';


const Home = () => {
	return (
		<section className='home'>


			<Dialogs
				items={[
					{
						_id: Math.random(),
						text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
						isRead: false,
						created_at: 'Wed Mar 9 2022 12:38:07',
						user: {
							_id: 'e2ef524fbf3d9fe611d5a8e90fefdc9c',
							fullName: 'Firstname Lastname',
							avatar: null,
							isOnline: true,
						},
					},
					{
						_id: Math.random(),
						text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
						isRead: false,
						created_at: 'Thu Mar 10 2022 14:38:07',
						user: {
							_id: '76d80224611fc919a5d54f0ff9fba446',
							fullName: 'Dirstname Horry',
							avatar: null,
						},
					},
					{
						_id: Math.random(),
						text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
						isRead: false,
						created_at: 'Thu Mar 10 2022 12:37:18',
						user: {
							_id: '22dc03ae0121f949d705c90c70b7d783',
							fullName: 'Йirstname Fox',
							avatar: null,
						},
					},
				]}
			/>

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

		</section>
	);
};

export default Home;
