import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Sidebar } from '../components';
import { userApi, dialogsApi } from '../utils/api';


const SidebarContainer = ({ user }) => {

	const [visible, setVisible] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [users, setUsers] = useState([]);
	const [isSearching, setIsSearching] = useState(false);
	const [selectedUserId, setSelectedUserId] = useState(false);

	//Todo maybe first message text set "Hello!" as default
	const [messageText, setMessageText] = useState('');

	const handleShow = () => {
		setVisible(true)
	};

	const handleCancel = () => {
		setVisible(false);
	};

	const handleSearch = (value) => {
		setIsSearching(true);
		userApi.findUsers(value).then(({ data }) => {
			setUsers(data);
			setIsSearching(false);
		}).catch(() => {
			setIsSearching(false);
		})
	}

	const handleChangeInput = value => {
		setInputValue(value)
	}

	const handleSelectUser = userId => {
		setSelectedUserId(userId);
	}

	const handleChangeTextArea = e => {
		setMessageText(e.target.value)
	}

	const handleAddDialog = () => {
		dialogsApi.create({partner: selectedUserId, text: messageText}).then(
			handleCancel()
		).catch(() => {
			setIsSearching(false);
		})
	}

	return (
		<Sidebar
			user={user}
			users={users}
			inputValue={inputValue}
			handleChangeInput={handleChangeInput}
			handleSearch={handleSearch}
			handleSelectUser={handleSelectUser}
			visible={visible}
			handleShow={handleShow}
			handleCancel={handleCancel}
			isSearching={isSearching}
			handleAddDialog={handleAddDialog}

			selectedUserId={selectedUserId}
			messageText={messageText}
			handleChangeTextArea={handleChangeTextArea}
		/>
	)
}


export default connect(({ user }) => ({
		user: user.data,
	}
))(SidebarContainer);
