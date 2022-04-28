import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Status.scss';


const Status = ({online, username}) => {
	return (
		<div className='dialog-header'>
			<div className='dialog-header__wrap'>
				<p className='dialog-header__title'>
					{username}
				</p>
				<div className='dialog-header__status'>
					<p className={
						classNames('status',
							{
								'status--online' : online,
								'status--offline' : !online
							})
					}>
						{online ? 'online' : 'offline'}
					</p>
				</div>
			</div>
		</div>
	);
};

Status.propTypes = {
	online: PropTypes.bool,
}

export default Status;
