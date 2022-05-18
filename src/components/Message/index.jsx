import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popover, Button } from 'antd';
import { EyeOutlined, MoreOutlined } from '@ant-design/icons';
import { Emoji } from 'emoji-mart';
import reactStringReplace from 'react-string-replace';

import {ReadIcon, Time, Avatar} from '../../components';

import { convertCurrentTime } from '../../utils/helpers';

import waveSvg from '../../assets/img/wave.svg';
import playSvg from '../../assets/img/play.svg';
import pauseSvg from '../../assets/img/pause.svg';
import './Message.scss';


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
			<div className='message-content__audio-progress' style={{width: progress + '%'}}/>
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
		createdAt,
		isMe,
		unread,
		attachments,
		isTyping,
		handleRemoveMessage,
		setPreviewImage,
	}) => {

	const renderAttachment = item => {
		if (item.ext !== 'webm') {
			return (
				<div key={item._id} className='attachments-item'>
					<div className='attachments-item__overlay'>
						<button
							onClick={() => setPreviewImage(item.url)}
							className='attachments-item__btn'
						>
							<EyeOutlined
								className='attachments-item__icon'
							/>
						</button>
					</div>
					<img src={item.url} alt={item.filename}/>
				</div>
			);
		} else {
			return <MessageAudio key={item._id} audioSrc={item.url}/>
		}
	}

	const isAudio = () => {
		const file = attachments[0];
		return attachments.length && file.ext === 'webm';
	}


	return(
		<div className={
			classNames('message',
				{
					'message--my' : isMe,
					'message--typing' : isTyping,
					'message--image' : !isAudio(attachments) && !text && attachments && attachments.length === 1,
					'message--audio' : isAudio(),
				})
		}>
			<div className="message-avatar">
				<Avatar user={user}/>
				{/*<img className='message-avatar__img' src={avatar} alt={`Avatar ${user.fullName}`}/>*/}
			</div>


			<div className="message-content">

				{isMe && (
					<Popover
						placement="bottomRight"
						content={
							<Button onClick={handleRemoveMessage}>Delete Message</Button>
						}
						trigger="click"
					>
						<button
							className='message-more__btn'
							title='Options'
						>
							<MoreOutlined
								className='message-more__icon'
							/>
						</button>
					</Popover>
				)}

				<div className="message-content__bubble">
					{text && (
						//Todo this is not a good practice
						<p className='message-content__text'>
							{reactStringReplace(text, /:(.+?):/g, (match) => (
								<Emoji key={Math.random()} size={60} emoji={match} set='apple'/>
							))}
						</p>
					)}

					{attachments.length > 0 && (
						<div className='message-content__attachments attachments'>
							{attachments.map(item => renderAttachment(item))}
						</div>
					)}

					{isTyping && (
						<div className='message-content--typing'>
							<span className='dot one'/>
							<span className='dot two'/>
							<span className='dot three'/>
						</div>
					)}
				</div>
				<span className="message-content__date">
					<Time date={createdAt}/>
				</span>
				<ReadIcon isMe={isMe} isRead={unread}/>
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
