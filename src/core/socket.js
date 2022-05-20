import { io } from "socket.io-client";


const socket = io('https://chat-server-dennis.herokuapp.com/');


export default socket;
