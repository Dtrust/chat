import React from 'react';

import { Message } from '../../components'
import './Home.scss';


const Home = () => {
	return (
		<section className='home'>
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
				isMe={true}
				isRead={false}
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
			/>

		</section>
	);
};

export default Home;
