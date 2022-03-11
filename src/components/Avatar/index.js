import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.scss'
import {generateAvatarFromHash} from '../../utils/helpers';


const Avatar = ({ user }) => {
	if(user.avatar) {
		return (
			<img
				className='dialogs-item__img avatar'
				src={user.avatar}
				alt={`Avatar ${user.fullName}`}
			/>
		)
	} else {
		const {color, colorLighten} = generateAvatarFromHash(user._id);
		const getFirstNameChar = user.fullName[0];

		return (
			<div
				style={{ background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96% )` }}
				className='dialogs-item__img avatar--empty'>{getFirstNameChar}
			</div>
		)
	}
}

Avatar.propTypes = {
	className: PropTypes.string,
}

export default Avatar;
