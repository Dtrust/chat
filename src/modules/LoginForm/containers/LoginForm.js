import { withFormik } from 'formik';

import validate from '../../../utils/validate';
import LoginForm from '../components/LoginForm';
import { userActions } from '../../../redux/actions';

import store from '../../../redux/store'


const LoginFormContainer =  withFormik({
	enableReinitialize:  true,
	mapPropsToValues: () => ({
		email: '',
		password: '',
	}),
	validate: values => {
		let errors = {};

		validate({ isAuth: true, values, errors });

		return errors;
	},

	handleSubmit: (values, { setSubmitting, props }) => {
		store.dispatch(userActions.fetchUserLogin(values)).then(({ status }) => {
			if (status === 'success') {
				setTimeout(() => {
					props.history.push('/');
				}, 3000);
			}
			setSubmitting(false)
		})
		.catch(() => {
			setSubmitting(false);
		})
	},
	displayName: 'LoginForm',
})(LoginForm);


export default LoginFormContainer
