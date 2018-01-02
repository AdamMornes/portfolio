import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="container footer-wrapper">

        <div className="row text-center">

          <div className="contact-info">
            <h2 className="text-center section-heading about"><span className="main">Contact Info</span><span className="diag-bar"></span><span className="fa fa-angle-right"></span></h2>
            <hr className="heading-divider"/>
          </div>

          <div className="visible-xs col-xs-12 mobile-icons">

            <ul className="list-inline">
              <li>
                <a href="https://www.facebook.com/adam.mornes?ref=bookmarks" target="_blank">
                  <span className="fa fa-facebook fa-2x"></span>
                </a>
              </li>
              <li>
                <a href="tel:218-244-5698">
                  <span className="fa fa-phone fa-2x"></span>
                </a>
              </li>
              <li>
                <a href="mailto:adammornes@gmail.com">
                  <span className="fa fa-envelope fa-2x"></span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/adam-mornes-a3564495/" target="_blank">
                  <span className="fa fa-linkedin fa-2x"></span>
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden-xs col-xs-4 phone-icon">
              <p>
                <a href="tel:218-244-5698"><span className="fa fa-phone fa-2x"></span><br/>218-244-5698</a>
              </p>
          </div>

          <div className="hidden-xs col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 smedia">
              <ul className="list-inline">
                <li>
                  <a href="https://www.facebook.com/adam.mornes?ref=bookmarks" target="_blank" title="Facebook">
                    <span className="fa fa-facebook fa-2x"></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/adam-mornes-a3564495/" target="_blank" title="Linked In">
                    <span className="fa fa-linkedin fa-2x"></span>
                  </a>
                </li>
              </ul>
          </div>

          <div className="hidden-xs col-xs-4 email-icon">
              <p>
                <a href="mailto:adammornes@gmail.com"><span className="fa fa-envelope fa-2x"></span><br/>adammornes@gmail.com</a>
              </p>
          </div>

          <div className="col-xs-12 text-center">
            -
          </div>

          <div className="col-xs-12 copyright-info h5">
            Copyright &copy; 2017 Adam Mornes
          </div>

        </div>

      </div>
    )
  }
}

export default Footer;
