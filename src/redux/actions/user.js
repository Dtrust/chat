import { userApi } from '../../utils/api';
import { openNotification } from '../../utils/helpers';


const actions = {
	setUserData: data => ({
		type: 'USER:SET_DATA',
		payload: data,
	}),
	fetchUserData: () => dispatch => {
		userApi.getMe().then(({ data }) => {
			console.log(data)
			dispatch(actions.setUserData(data));
		})
	},
	fetchUserLogin: postData => dispatch => {
		return userApi.login(postData).then(({ data }) => {

			const {status, token} = data;

			if (status === 'error') {
				openNotification({
					title: 'Authorisation Error',
					text: 'Incorrect E-mail or Password',
					type: 'error',
				})
			} else {
				openNotification({
					title: 'Success',
					type: 'success',
				})
				window.axios.defaults.headers.common['token'] = token;
				window.localStorage['token'] = token;
				dispatch(actions.fetchUserData());
			}
			return data;
		}).catch(({response}) => {
			if (response.status === 403) {
				openNotification({
					title: 'Authorisation Error',
					text: 'Incorrect E-mail or Password',
					type: 'error',
				})
			}
		})
	},
	fetchUserSignup: postData => dispatch => {
		return userApi.signUp(postData).then(({ data }) => {
			console.log(data)
			return data
		})
	}
}


export default actions;
