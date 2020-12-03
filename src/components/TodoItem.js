import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
	render() {
		return <div>{this.props.todo.title}</div>;
	}
}
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
};

export default TodoItem;
