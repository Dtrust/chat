import { withFormik } from 'formik';

import RegisterForm from '../components/RegisterForm';


export default withFormik({
	// mapPropsToValues: () => ({ email: 'qaxs' }),
	validate: values => {
		let errors = {};
		if (!values.email) {
			errors.email = 'Required';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
				values.email
			)
		) {
			errors.email = 'Invalid email address';
		}

		if(!values.password) {
			errors.password = 'Please, enter password'
		} else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(
			values.password
		)) {
			errors.password = 'Password must be contains a-Z and 0-9'
		}

		return errors;
	},

	handleSubmit: (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 1000);
	},

	displayName: 'RegisterForm', // helps with React DevTools
})(RegisterForm);
