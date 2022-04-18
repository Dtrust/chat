import React from 'react';
import { Route } from 'react-router-dom';

import {LoginForm, RegisterForm} from '../../modules';
import CheckResult from './components/checkResult';

import './Auth.scss';


const Auth = () => (
	<section className='auth'>
		<div className='auth-content'>
			<Route exact path={['/', '/signin']} component={LoginForm}/>
			<Route exact path='/signup' component={RegisterForm}/>
			<Route exact path='/signup/result' component={CheckResult}/>
		</div>
	</section>
);

export default Auth;
