import React, { Component } from 'react';
import Button from '../Button/Button';
import Slider from '../Slider/Slider';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slider: ''
    }

    this.toggle = this.toggle.bind(this);
  }

   componentDidMount() {
     const toggle = this.props.toggle;
     $('.project-details').bind('keydown', function(e) {
       if (e.which === 27) {
          toggle();
       }
     })
     $('.project-details').focus();
   }

  toggle(e) {
    if (e.target.className === 'project-details') {
      this.props.toggle();
    }
  }

  render() {
    var slides = '';
    slides = this.props.project.imgPath.map((image, i) => {
      return (
        <div className='sample-wrapper' key={i}>
          <img className='sample' src={image}/>
        </div>
      )
    })
    return (
      <div className='project-details' onClick={this.toggle} tabIndex='1'>
        <div className='container'>
          <div className='row'>

            <div className='project-details-wrapper'>
              <div className='col-xs-10'>
                <h4>{this.props.project.name}</h4>
              </div>
              <div className='col-xs-2'>
                <Button title={'Close Resume'} className={'btn-details-close'} action={this.props.toggle} content={'X'}/>
              </div>
              <div className='col-xs-10'>
                <div className='project-slider-wrapper'>
                  <Slider className={'project-slider'} dots={false} slidesToShow={1} slides={slides}/>
                </div>
              </div>
              <div className='col-xs-12'>
                <p>{this.props.project.description}</p>
              </div>
              <div className='clear'></div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default ProjectDetails;
