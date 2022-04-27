import React from 'react';
import { Modal, Select, Form, Input, Spin } from 'antd';
import { FormOutlined, TeamOutlined } from '@ant-design/icons/lib/icons';

import { Dialogs } from '../../containers';


const { Option } = Select;
const { TextArea } = Input;

//Todo add spin-load fo users fetch
const Sidebar = (
	{ 	user,
		users,
		visible,
		inputValue,
		handleShow,
		handleCancel,
		handleChangeInput,
		handleSearch,
		handleSelectUser,
		isSearching,
		handleAddDialog,

		selectedUserId,
		handleChangeTextArea,
		messageText
	}) => {

	const options = users.map(user => (
		<Option key={user._id}>{user.username}</Option>
	));

	return (
		<div className='chat-sidebar sidebar'>

			<div className='sidebar-header'>
				<div className='sidebar-header__wrap'>
					<TeamOutlined className='sidebar-header__icon icon icon--team' />
					<p className='sidebar-header__title'>Contacts List</p>
				</div>
				<button onClick={handleShow} className='sidebar-header__btn btn-edit'>
					<FormOutlined className='sidebar-header__icon icon icon--edit' />
				</button>
			</div>

			<Dialogs userId={user && user._id} />

			<Modal
				title="Find User"
				visible={visible}
				onOk={handleAddDialog}
				okText={'Add to contacts'}
				onCancel={handleCancel}
				cancelText={'Cancel'}
				// confirmLoading={isSearching}
			>
				<Form>
					<Form.Item label='Please, insert user name or e-mail'>
						<Select
							style={{width: '100%'}}
							placeholder='Please, insert user name or e-mail'
							value={inputValue}
							onSearch={handleSearch}
							onChange={handleChangeInput}
							onSelect={handleSelectUser}
							defaultActiveFirstOption={false}
							showArrow={false}
							filterOption={false}
							notFoundContent={isSearching ? <Spin size="small" /> : null}
							showSearch
						>
							{options}
						</Select>
					</Form.Item>
					{selectedUserId && (
						<Form.Item label='Message!'>
							<TextArea
								autoSize
								value={messageText}
								onChange={handleChangeTextArea}
							/>
						</Form.Item>
					)}
				</Form>

			</Modal>

		</div>
	);
};


export default Sidebar;
