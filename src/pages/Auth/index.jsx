import React from 'react';
import {Block, Button} from '../../components';

import './Auth.scss'


const Auth = () => (
	<section className='auth'>
		<div className='auth-content'>
			<div className='auth-top'>
				<h2 className='title auth-top__title'>Enter to account</h2>
				<p className='desc auth-top__desc'>Please, enter to your account</p>
			</div>
			<Block>
				<Button type='primary' size='large'>Hello</Button>
			</Block>
		</div>
	</section>
);

export default Auth;
