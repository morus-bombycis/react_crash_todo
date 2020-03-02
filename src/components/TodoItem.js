import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <div>
                <p>{this.todo.props.title}</p>
            </div>
        )
    }
}

//Proptypes
Todos.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
