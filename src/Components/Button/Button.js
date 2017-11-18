import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <button className={'btn btn-custom ' + this.props.className} title={this.props.title} onClick={this.props.action}>{this.props.content}</button>
    )
  }
}

export default Button;
