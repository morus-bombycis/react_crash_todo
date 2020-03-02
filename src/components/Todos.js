import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        return this.todos.props.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
        ));
    }
}

//Proptypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;