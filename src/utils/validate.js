export default ({ isAuth, values, errors }) => {

	const rules = {
		username: (value) => {
			if (!isAuth && !value) {
				errors.username = 'Please, insert Username';
			}
		},
		email: (value) => {
			if (!value) {
				errors.email = 'Please, insert correct E-mail';
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
					value
				)
			) {
				errors.email = 'Invalid email address';
			}
		},
		password: (value) => {
			if(!value) {
				errors.password = 'Please, enter password'
			} else if(!isAuth && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/.test(
				value
			)) {
				errors.password = isAuth ? 'Incorrect password' : 'Password must be contains a-Z and 0-9'
			}
		},
		password2: (value) => {
			if(!isAuth && value !== values.password) {
				errors.password2 = 'Password do not match, please re-type'
			}
		},
	}

	Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));

}
