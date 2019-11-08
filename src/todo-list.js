import React from 'react';
import uuidv4 from 'uuid/v4';
import TodoItem from './todo-item';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoName: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      todoName: event.target.value,
    })
  }

  handleSubmit = (event) => {
    this.setState({
      todoName: '',
      todos: [...this.state.todos, this.state.todoName],
    });
    event.preventDefault();
  }

  handleRemove = (event, index) => {
    this.setState({
      todos: this.state.todos.filter((_, i) => i !== index)
    });
    event.preventDefault();
  }

  render() {
    const todoItems = this.state.todos.map((val, index) => <TodoItem key={uuidv4()} value={val} handleRemove={(event) => this.handleRemove(event, index)}></TodoItem>);

    return (
      <div>
        <h1>TODO LIST</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" autoFocus value={this.state.todoName} onChange={this.handleChange} />
          <input type="submit" value="Add" disabled={!this.state.todoName.trim().length} />
        </form>
        <ul>
          {todoItems}
        </ul>
      </div>
    );
  }
}