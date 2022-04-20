import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Status.scss';


const Status = ({online}) => {
	return (
		<p className={
			classNames('status',
				{
					'status--online' : online,
					'status--offline' : !online
				})
		}>
			{online ? 'online' : 'offline'}
		</p>
	);
};

Status.propTypes = {
	online: PropTypes.bool,
}

export default Status;
