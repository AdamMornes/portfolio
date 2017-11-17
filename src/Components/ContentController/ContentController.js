import React, { Component } from 'react';
import ResumeController from '../ResumeController/ResumeController';

class ContentController extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <ResumeController />
      </div>
    )
  }
}

export default ContentController;
