import React, { useEffect, useState } from 'react';
import { Result, Button } from 'antd';

import { Block } from '../../../components';
import userApi from '../../../utils/api/user';


const resultRender = ({ hash, verified }) => {
	if (hash) {
		if (verified) {
			return {
				status: 'success',
				title: 'Account verified!',
			}
		} else {
			return {
				status: 'error',
				title: 'Verify error. Please, try again',
			}
		}
	} else {
		return {
			status: 'success',
			title: 'Almost ready! Please check Your E-mail and verify Your account',
		}
	}
}

const CheckResult = ({ location, history }) => {

	const [verified, setVerified] = useState(false);
	const hash = location.search.split('hash=')[1];
	const result = resultRender(hash, verified)

	useEffect(() => {

		if (hash) {
			userApi.verifyHash(hash).then(({ data }) => {
				if (data.status === 'success') {
					setVerified(true);
				}
			})
		}
	})

	return (
		<Block>
			<Result
				status={result.status}
				title={result.title}
				extra={
					result.status === 'success' && verified && (
						<Button
							type="primary"
							key="signin"
							onClick={() => history.push('/signin')}
						>
							SignIn
						</Button>
					)
				}
			/>
		</Block>
	);
};

export default CheckResult;
