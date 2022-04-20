import { axios } from '../../core';


export default {
	login: (postData) => axios.post('/user/signin', postData),
	signUp: (postData) => axios.post('/user/signup', postData),
	verifyHash: hash => axios.get(`/user/verify?hash=` + hash),
	getMe: () => axios.get('/user/me'),
};