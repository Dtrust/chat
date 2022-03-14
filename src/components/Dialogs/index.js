import React from 'react';
import orderBy from 'lodash/orderBy';

import {Input, Empty} from 'antd';

import { DialogItem } from '../../components';

import './Dialogs.scss';


const { Search } = Input;

const Dialogs = ({ items, userId, onSearch, inputValue }) => (

	<div>

		<div className='sidebar-search'>
			<Search
				className='sidebar-search__input'
				placeholder="input search text"
				onChange={e => onSearch(e.target.value)}
				value={inputValue}
			/>
		</div>

		<div className='sidebar-contacts'>
			<div className='dialogs'>
				{items.length ? (
					orderBy(items, ['created_at'], ['asc']).map(item => (
						<DialogItem
							key={item._id}
							isMe={item.user._id === userId}
							{...item}
						/>
					))

				) : (
					<Empty
						image={Empty.PRESENTED_IMAGE_SIMPLE}
						description='Sorry, contact not found'

					/>
				)}
			</div>
		</div>

	</div>
)

export default Dialogs;
