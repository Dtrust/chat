import { io } from "socket.io-client";


const socket = io('https://chat-server-dennis.herokuapp.com/',
	{
		// withCredentials: true,
		extraHeaders: {
			"my-custom-header": "abcd"
		}
	});


export default socket;
