import axios from 'axios';


axios.defaults.baseURL = 'https://chat-server-dennis.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:3003';
axios.defaults.headers.common['token'] = window.localStorage.token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

window.axios = axios;


export default axios;
