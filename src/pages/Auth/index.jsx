import React from 'react';
import { Route } from 'react-router-dom';

import {LoginForm, RegisterForm} from '../../modules';

import './Auth.scss';


const Auth = () => (

	<section className='auth'>
		<div className='auth-content'>
			<Route exact path={['/', '/login']} component={LoginForm}/>
			<Route ecact path='/signup' component={RegisterForm}/>
		</div>
	</section>
);

export default Auth;
