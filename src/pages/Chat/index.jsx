import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { EllipsisOutlined } from '@ant-design/icons/lib/icons';

import { Messages, DialogInput, Status } from '../../containers';
import { Sidebar } from '../../containers';
import { dialogsActions } from '../../redux/actions';

import './Chat.scss';


const Chat = (props) => {

	const { setCurrentDialogId } = props

	useEffect(() => {

		const { location: { pathname }} = props;
		const dialogId = pathname.split('/').pop();
		setCurrentDialogId(dialogId)

	},[props.location.pathname])

	return (
		<section className='chat'>

			<Sidebar/>

			<div className='chat-dialog dialog'>

				<Status/>

				<button className='dialog-header__btn btn-dots'>
					<EllipsisOutlined className='dialog-header__icon icon icon--dots' style={{fontSize: '22px'}} />
				</button>

				<Messages items/>

				<DialogInput/>

			</div>

		</section>
	);
};

export default withRouter(connect(
	({ dialogs }) => dialogs,
	dialogsActions
)(Chat));
