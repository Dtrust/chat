import React from 'react';
import { Route } from 'react-router-dom';

import {LoginForm, RegisterForm} from '../../modules';

import './Auth.scss'
import {Routes} from 'react-router';


const Auth = () => (

	<section className='auth'>
		<div className='auth-content'>
			// todo routes doesn't work
			{/*<Routes>*/}
			{/*	<Route exact path={['/', '/login']} element={<LoginForm/>}/>*/}
			{/*	<Route ecact path='/signup' element={<RegisterForm/>}/>*/}
			{/*</Routes>*/}
			<RegisterForm/>
		</div>
	</section>
);

export default Auth;
