import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popover, Button } from 'antd';

import {ReadIcon, Time, Avatar} from '../../components';

import { convertCurrentTime } from '../../utils/helpers'

import waveSvg from '../../assets/img/wave.svg'
import playSvg from '../../assets/img/play.svg'
import pauseSvg from '../../assets/img/pause.svg'
import './Message.scss'


const MessageAudio = ({ audioSrc }) => {

	const audioEl = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);

	const audioPlay = () => {
		if(isPlaying) {
			audioEl.current.pause();
		} else {
			audioEl.current.play();
		}
	};

	useEffect(() => {

		audioEl.current.addEventListener('playing', () => {
			setIsPlaying(true);
		}, false);

		audioEl.current.addEventListener('ended', () => {
			setIsPlaying(false);
			setProgress(0);
			setCurrentTime(0);
		}, false);

		audioEl.current.addEventListener('pause', () => {
			setIsPlaying(false);
		}, false);

		audioEl.current.addEventListener('timeupdate', () => {

			const duration = audioEl.current && audioEl.current.duration || 0;

			setCurrentTime(audioEl.current.currentTime);
			setProgress((audioEl.current.currentTime / duration) * 100);
		});

	}, [])

	return (
		<div className='message-content__audio'>
			<audio ref={audioEl} src={audioSrc} preload='metadata'/>
			<div className='message-content__audio-progress' style={{width: progress + '%'}}></div>
			<div className='message-content__audio-wrap'>
				<button onClick={audioPlay} className='message-content__audio-btn'>
					{isPlaying ?
						<img src={pauseSvg} alt='pause'/> : <img src={playSvg} alt='play'/>
					}
				</button>
				<img className='message-content__audio-wave' src={waveSvg} alt='audio wave'/>
				<span className='message-content__audio-duration'>{convertCurrentTime(currentTime)}</span>
			</div>
		</div>
	)
}

const Message = (
	{
		user,
		avatar,
		text,
		audio,
		date,
		isMe,
		isRead,
		attachments,
		isTyping,
		handleRemoveMessage,
	}) => {

	return(
		<div className={
			classNames('message',
				{
					'message--my' : isMe,
					'message--typing' : isTyping,
					'message--image' : !text && attachments && attachments.length === 1,
					'message--audio' : audio,
				})
		}>
			<div className="message-avatar">
				<Avatar user={user}/>
				{/*<img className='message-avatar__img' src={avatar} alt={`Avatar ${user.fullName}`}/>*/}
			</div>

			<Popover
				placement="bottomRight"
				content={
					<Button onClick={handleRemoveMessage}>Delete Message</Button>
				}
				trigger="click"
			>
				<Button>BR</Button>
			</Popover>

			<div className="message-content">
				<div className="message-content__bubble">
					{text && (<p className='message-content__text'>{text}</p>)}

					{audio && (<MessageAudio audioSrc={audio}/>)}

					{attachments && (
						<div className='message-content__attachments'>
							{attachments.map((item, index) => (
								<div key={index} className='message-content__attachments-item'>
									<img src={item.url} alt={item.filename}/>
								</div>
							))}
						</div>
					)}

					{isTyping && (
						<div className='message-content--typing'>
							<span className='dot one'></span>
							<span className='dot two'></span>
							<span className='dot three'></span>
						</div>
					)}
				</div>
				{date && (
					<span className="message-content__date">
						<Time date={new Date(date)}/>
					</span>)
				}
				<ReadIcon isMe={true} isRead={true}/>
			</div>
		</div>
	)
};

Message.defaultProps = {
	user: {}
}

Message.propTypes = {
	user: PropTypes.object,
	avatar: PropTypes.string,
	text: PropTypes.string,
	date: PropTypes.string,
	attachments: PropTypes.array,
	isTyping: PropTypes.bool,
	isMe: PropTypes.bool,
	isRead: PropTypes.bool,
	audio: PropTypes.string,
}

export default Message;
