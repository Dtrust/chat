import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

import { Empty, Spin } from 'antd';

import {Message} from '../';

import background from '../../assets/img/chat-bg.jpg';


const Messages = ({ blockRef, isLoading, items }) => {

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
			{isLoading ? (
				<Spin size='large' tip="Loading messages..."/>
			) : items && !isLoading ? (
				items.length > 0 ? (
					items.map(item => <Message key={item._id} {...item}/>)
				) : (
					<Empty description='No messages'/>
				)
			) : (
				<Empty description='No messages'/>
			)}
		</div>
	)

}

Messages.propTypes = {
	items: PropTypes.array,
}

export default Messages