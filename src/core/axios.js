import axios from 'axios';


axios.defaults.baseURL = 'https://chat-server-dennis.herokuapp.com/';
axios.defaults.headers.common['token'] = window.localStorage.token;
// axios.defaults.headers.common['my-custom-header'] = 'abcd';
axios.defaults.headers.common['credentials'] = true;

window.axios = axios;


export default axios;
