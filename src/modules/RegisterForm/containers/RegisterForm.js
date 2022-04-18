import { withFormik } from 'formik';

import validate from '../../../utils/validate'
import RegisterForm from '../components/RegisterForm';
import store from '../../../redux/store';
import {userActions} from '../../../redux/actions';


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
		.catch(() => {
			setSubmitting(false);
		})
	},

	displayName: 'RegisterForm',
})(RegisterForm);
