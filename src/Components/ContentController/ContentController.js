import React, { Component } from 'react';
import AboutController from '../AboutController/AboutController';
import WorkController from '../WorkController/WorkController';

class ContentController extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <AboutController />
        <WorkController />
      </div>
    )
  }
}

export default ContentController;
