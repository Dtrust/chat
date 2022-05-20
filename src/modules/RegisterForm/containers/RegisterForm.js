import { withFormik } from 'formik';

import validate from '../../../utils/validate'
import RegisterForm from '../components/RegisterForm';
import store from '../../../redux/store';
import { userActions } from '../../../redux/actions';
import { openNotification } from '../../../utils/helpers';


export default withFormik({
	enableReinitialize:  true,
	mapPropsToValues: () => ({
		username: '',
		email: '',
		password: '',
		password2: '',
	}),
	validate: values => {
		let errors = {};

		validate({ isAuth: false, values, errors });

		return errors;
	},

	handleSubmit: (values, { setSubmitting, props }) => {
		store.dispatch(userActions.fetchUserSignup(values)).then(({ status }) => {
			if (status === 'success') {
				setTimeout(() => {
					props.history.push('/');
				}, 3000);
			}
			setSubmitting(false);
		})
		.catch((err) => {
			if (
				typeof err.response.data.message !== 'string' &&
				err.response.data.message.errmsg.indexOf('dup') >= 0
			) {
				openNotification({
					title: 'Error',
					text: 'This E-mail already exists',
					type: 'error',
					duration: 5000,
				});
			} else {
				openNotification({
					title: 'Error',
					text: 'Server Error. Please try again later',
					type: 'error',
					duration: 5000,
				});
			}
			setSubmitting(false);
		})
	},

	displayName: 'RegisterForm',
})(RegisterForm);
