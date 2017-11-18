import React, { Component } from 'react';
import ResumeController from '../ResumeController/ResumeController';
import WorkController from '../WorkController/WorkController';

class ContentController extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div id="Work">
          <ResumeController />
          <WorkController />
        </div>
      </div>
    )
  }
}

export default ContentController;
