import _ from 'lodash';

import { 
	RENEW_SCANS
} from './actions.js'


function renew_scans(state = [], action) {
	const message = action.message;

	if (message["status"] == 'success') {
		return message['scans'];
	} else {
		/* TODO: add error handling */
	}		
}

function scan_reduce(state = [], action) {
	switch (action.type) {
		case RENEW_SCANS:
			return renew_scans(state, action);
		default:
			return state;
	}
}


export default scan_reduce