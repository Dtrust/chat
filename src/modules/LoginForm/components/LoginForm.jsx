import React from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Form, Input} from 'antd';
import {UserOutlined, LockOutlined, InfoCircleOutlined} from '@ant-design/icons';

import { Button, Block } from '../../../components';
import { validateField } from '../../../utils/helpers'


const LoginForm = props => {

	const {
		values,
		touched,
		errors,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit,
		handleReset,
		dirty,
	} = props;

	return (
		<div>
			<div className='auth-top'>
				<h2 className='title auth-top__title'>Enter to account</h2>
				<p className='desc auth-top__desc'>Please, enter to your account</p>
			</div>
			<Block>
				<Form
					onSubmit={handleSubmit}
					name="normal_login"
					className="login-form"
					initialValues={{
						remember: true,
					}}
				>
					<Form.Item
						name="email"
						validateStatus={validateField('email', touched, errors)}
						help={!touched.email ? '' : errors.email}
					>
						<Input
							prefix={<UserOutlined className="site-form-item-icon" />}
							id="email"
							placeholder="E-mail"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
					</Form.Item>
					<Form.Item
						name="password"
						validateStatus={validateField('password', touched, errors)}
						help={!touched.password ? '' : errors.password}
					>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							id ='password'
							type="password"
							placeholder="Password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
						/>
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
	)
}

export default LoginForm;
