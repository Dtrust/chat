import React, { useEffect, useState } from 'react';
import {Result, Button, Spin} from 'antd';

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

	const hash = location.search.split('hash=')[1];
	console.log(hash)
	const [verified, setVerified] = useState(false);
	const [checking, setChecking] = useState(!!hash);
	const [info, setInfo] = useState(resultRender({ hash, checking, verified }));
	// const result = resultRender(hash, verified);

	const setStatus = ({ checking, verified }) => {
		setInfo(resultRender({ hash, checking, verified }));
		setVerified(verified);
		setChecking(checking);
	};

	useEffect(() => {

		if (hash) {
			userApi.verifyHash(hash).then(() => {
				setStatus({ verified: true, checking: false });
			}).catch(() => {
				setStatus({ verified: false, checking: false });
			})
		}
	}, [])

	console.log({ info, checking, verified, hash });

	return (
		<Block>
			{!checking ? (
				<Result
					status={info.status}
					title={info.title}
					extra={
						info.status === 'success' && verified && (
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
			) : (
				<div className="verify-block__loading">
					<Spin size="large" />
				</div>
			)}
		</Block>
	);
};

export default CheckResult;
