import React from 'react';
import orderBy from 'lodash/orderBy';

import { DialogItem } from '../../components';

import './Dialogs.scss';


const Dialogs = ({ items, userId }) => (
	<div className='dialogs'>
		{orderBy(items, ['created_at'], ['asc']).map(item => (
			<DialogItem
				key={item._id}
				isMe={item.user._id === userId}
				{...item}
			/>
			)
		)}
	</div>
)

export default Dialogs;
