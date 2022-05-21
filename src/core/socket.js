import { io } from "socket.io-client";


const socket = io('https://chat-server-dennis.herokuapp.com/',
	{
		// withCredentials: true,
		extraHeaders: {
			"sky-messenger-header": "request"
		}
	});

// const socket = io(window.location.origin.replace('3000', '3003'), {
// 	// 		// withCredentials: true,
// 	extraHeaders: {
// 		"sky-messenger-header": "request"
// 	}
// });


export default socket;
