import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Form, Input} from 'antd';
import { UserOutlined, LockOutlined, InfoCircleOutlined } from '@ant-design/icons';

import { Button, Block } from '../../../components';


class RegisterForm extends Component {

	render() {
		const onFinish = values => {
			console.log('Received values of form: ', values);
		};

		const success = false;

		return (
			<div>
				<div className='auth-top'>
					<h2 className='title auth-top__title'>SignUp</h2>
					<p className='desc auth-top__desc'>Please, signup account</p>
				</div>
				<Block>
					{!success ? (<Form
						name="normal_login"
						className="login-form"
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
					>
						<Form.Item
							name="username"
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
						</Form.Item>
						<Form.Item
							name="email"
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
						</Form.Item>
						<Form.Item
							name="password"
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="Password"
							/>
						</Form.Item>
						<Form.Item
							name="password"
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="Retype Password"
							/>
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit" className="login-form-button">
								Signup
							</Button>
							Or <Link to='/'>Log in!</Link>
						</Form.Item>
					</Form>) : (
						<div className='auth-success'>
							<div className='auth-success__icon'>
								<InfoCircleOutlined />
							</div>
							<h2 className='auth-success__title'>Please, verify your account</h2>
							<p className='auth-success__desc'>An email has been sent to your email, please follow the link in the email</p>
						</div>)}
				</Block>
			</div>
		);
	}
};


export default RegisterForm;
