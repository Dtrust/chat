import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

import { Empty, Spin, Modal } from 'antd';

import { Message } from '../';

import background from '../../assets/img/chat-bg.jpg';


const Messages = ({ handleRemoveMessage, blockRef, isLoading, items, user, previewImage, setPreviewImage, onClosePreviewImage }) => {

	return (
		<div
			ref={blockRef}
			className={
				classNames('dialog-content', {
					'dialog-content--loading': isLoading,
					'dialog-content--empty': !items || items.length === 0,
				})
			}
			style={{backgroundImage:`linear-gradient(rgba(238, 238, 238, 0.7), rgba(238, 238, 238, 0.7)), url(${background})`}}
		>
			{isLoading && !user ? (
				<Spin size='large' tip="Loading messages..."/>
			) : items && !isLoading ? (
				items.length > 0 ? (
					items.map(item => (
						<Message
							key={item._id}
							{...item}
							isMe={user._id === item.user._id}
							handleRemoveMessage={handleRemoveMessage.bind(this, item._id)}
							setPreviewImage={setPreviewImage}
						/>
					))
				) : (
					<Empty description='No messages'/>
				)
			) : (
				<Empty description='Please, open dialog'/>
			)}
			<Modal
				footer={null}
				visible={previewImage}
				onCancel={onClosePreviewImage}
			>
				<img src={previewImage} style={{width: '100%'}} alt='preview'/>
			</Modal>
		</div>
	)

}

Messages.propTypes = {
	items: PropTypes.array,
}

export default Messages
