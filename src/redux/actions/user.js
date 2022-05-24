import { userApi } from '../../utils/api';
import { openNotification } from '../../utils/helpers';


const actions = {
	setUserData: data => ({
		type: 'USER:SET_DATA',
		payload: data,
	}),
	setIsAuth: bool => ({
		type: 'USER:SET_IS_AUTH',
		payload: bool,
	}),
	fetchUserData: () => dispatch => {
		userApi.getMe().then(({ data }) => {
			console.log(data)
			dispatch(actions.setUserData(data));
		}).catch(err => {
			if(err.response.status === 403) {
				dispatch(actions.setIsAuth(false));
				delete window.localStorage.token;
			}
		})
	},
	fetchUserLogin: postData => dispatch => {
		return userApi.login(postData).then(({ data }) => {

			const {token} = data;

			openNotification({
				title: 'Success',
				type: 'success',
			})

			window.axios.defaults.headers.common['token'] = token;
			window.localStorage['token'] = token;

			dispatch(actions.fetchUserData());
			dispatch(actions.setIsAuth(true));
			return data

		}).catch(() => {
			openNotification({
				title: 'Authorisation Error',
				text: 'Incorrect E-mail or Password',
				type: 'error',
			})
		})
	},
	fetchUserSignup: postData => () => {
		// return userApi.signUp(postData).then(({ data }) => {
		// 	console.log(data)
		// 	return data
		// })
		console.log(postData)
		return userApi.signUp(postData);
	}
}


export default actions;
