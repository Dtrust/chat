import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input} from 'antd';
import { UserOutlined, LockOutlined, InfoCircleOutlined } from '@ant-design/icons';

import { Button, Block } from '../../../components';

const RegisterForm = props => {

	const success = false;

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
				<h2 className='title auth-top__title'>SignUp</h2>
				<p className='desc auth-top__desc'>Please, signup account</p>
			</div>
			<Block>
				{!success ? (
					<Form
						onSubmit={handleSubmit}
						name="normal_login"
						className="login-form"
						initialValues={{
							remember: true,
						}}
					>
						<Form.Item
							name="username"
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
						</Form.Item>
						<Form.Item
							name="email"
							validateStatus={
								!touched.email ? '' : errors.email ? 'error' : 'success'
							}
							help={!touched.email ? '' : errors.email ? 'error' : 'success'}
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
							validateStatus={
								!touched.password ? '' : errors.password ? 'error' : 'success'
							}
							help={!touched.password ? '' : errors.password ? 'error' : 'success'}
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
						<Form.Item
							name="password2"
							validateStatus={
								!touched.password ? '' : errors.password ? 'error' : 'success'
							}
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								id='password2'
								type="password"
								placeholder="Retype Password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
						</Form.Item>
						<Form.Item>
							<Button onClick={handleSubmit} type="primary" htmlType="submit" className="login-form-button">
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
	)
}

export default RegisterForm;
