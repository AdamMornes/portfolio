import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <button className={'btn btn-custom ' + this.props.className} title={this.props.title} onClick={this.props.action} disabled={this.props.disabled}>{this.props.content}</button>
    )
  }
}

Button.propTypes = {
  disabled: PropTypes.bool
}

Button.defaultProps = {
  disabled: false
}

export default Button;
