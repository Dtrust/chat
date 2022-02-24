import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Form, Input} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Button, Block } from '../../../components';


class LoginForm extends Component {

	render() {
		const onFinish = values => {
			console.log('Received values of form: ', values);
		};
		return (
			<div>
				<div className='auth-top'>
					<h2 className='title auth-top__title'>Enter to account</h2>
					<p className='desc auth-top__desc'>Please, enter to your account</p>
				</div>
				<Block>
					<Form
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
							name="password"
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="Password"
							/>
						</Form.Item>
						<Form.Item>
							<Form.Item name="remember" valuePropName="checked" noStyle>
								<Checkbox>Remember me</Checkbox>
							</Form.Item>

							<a className="login-form-forgot" href="">
								Forgot password
							</a>
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit" className="login-form-button">
								Log in
							</Button>
							Or <Link to='/signup'>register now!</Link>
						</Form.Item>
					</Form>
				</Block>
			</div>
		);
	}
};


export default LoginForm;
