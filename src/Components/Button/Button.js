import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
        <button className='btn' onClick={this.props.toggle}>{this.props.content}</button>
      </div>
    )
  }
}

export default Button;
