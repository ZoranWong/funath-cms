import React, { Component } from 'react';
import { render } from 'react-dom';

import PropTypes from 'prop-types';

/*export default class AlertMessage extends Component {
	render(){
		return (
			<div className="successMsg alert alert-success">
				<button type="button" onClick={this.props.func} className="close" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<strong>Successfully! </strong>
				{this.props.data}
			</div>
		)
	}
}*/

export const AlertMessage = (title, message, messageType) => {
	// TODO -> change icons (a/c to your need)
	let type = '', icon = '';
	if(messageType == 'warning'){
		type = 'warning-msg';
		icon =  'fa-exclamation-triangle';
	}else if(messageType == 'success'){
		type = 'success-msg';
		icon =  'fa-check';
	}else if(messageType == 'error'){
		type = 'error-msg';
		icon =  'fa-remove';
	}
	return (
		Bert.alert({
			title: title,
			message: message,
			type: type,
			style: 'growl-top-right',
			icon: icon
		})
	);
}

/*AlertMessage.propTypes = {
  data: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired
};*/