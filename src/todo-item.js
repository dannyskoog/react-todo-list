import React from 'react';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    ({ value: this.value, handleRemove: this.handleRemove } = props);
  }

  render() {
    return <li>{this.value} <a href="/#" onClick={this.handleRemove}>Remove</a></li>;
  }
}