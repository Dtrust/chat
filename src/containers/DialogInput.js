import React from 'react';
import { connect } from 'react-redux';

import { DialogInput as DialogInputBase } from '../components';
import { messagesActions } from '../redux/actions';


const DialogInput = ({ fetchSendMessage, currentDialogId }) => {

	if (!currentDialogId) {
		return null
	}

	return <DialogInputBase
		onSendMessage={fetchSendMessage}
		currentDialogId={currentDialogId}
	/>;

};


export default connect(({ dialogs }) => dialogs, messagesActions)(DialogInput);
