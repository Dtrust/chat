import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'antd';
import { UserOutlined, LockOutlined, InfoCircleOutlined, MailOutlined } from '@ant-design/icons';

import { Button, Block, FormField } from '../../../components';


const success = false;

const RegisterForm = props => {

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
						<FormField
							name='username'
							type='text'
							icon={UserOutlined}
							placeholder='Username'
							handleChange={handleChange}
							handleBlur={handleBlur}
							touched={touched}
							errors={errors}
							values={values}
						/>
						<FormField
							name='email'
							type='text'
							icon={MailOutlined}
							placeholder='E-mail'
							handleChange={handleChange}
							handleBlur={handleBlur}
							touched={touched}
							errors={errors}
							values={values}
						/>
						<FormField
							name='password'
							type='password'
							isPass={true}
							icon={LockOutlined}
							placeholder='Password'
							handleChange={handleChange}
							handleBlur={handleBlur}
							touched={touched}
							errors={errors}
							values={values}
						/>
						<FormField
							name='password2'
							type='password'
							isPass={true}
							icon={LockOutlined}
							placeholder='Retype Password'
							handleChange={handleChange}
							handleBlur={handleBlur}
							touched={touched}
							errors={errors}
							values={values}
						/>
						<Form.Item>
							<Button
								disabled={isSubmitting}
								onClick={handleSubmit}
								type="primary"
								htmlType="submit"
								className="login-form-button"
							>
								Signup
							</Button>
							Or <Link to='/signin'>Log in</Link>
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
