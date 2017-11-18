import React, { Component } from 'react';
import Zenscroll from'zenscroll';

Zenscroll.setup(500, 60);

class Header extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleNavResize);
  }

  handleNavResize() {
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
      $('#Header').addClass('header-reduction');
      $('#mainNav').addClass('navbar-fixed-top');
    } else {
      $('#Header').removeClass('header-reduction');
      $('#mainNav').removeClass('navbar-fixed-top');
    }
  }

  render() {
    return (
      <div className="header-wrapper">

        <nav className="navbar" role="navigation" id="mainNav">

          <div className="container-fluid">
            <div className="row">

                <div className="logo col-xs-6 col-sm-5 col-md-4">

                  <div className="diag-wrapper hidden-xs">

                      <div className="left-diag"></div>

                      <div className="left-line-wrapper">
                        <div className="left-diag-line"></div>
                      </div>

                      <div className="right-diag-wrapper">
                        <div className="right-diag"></div>

                        <div className="right-diag-line-wrapper">
                          <div className="right-diag-line"></div>
                        </div>

                      </div>

                  </div>

                  <div className="top-icon-wrapper">

                  </div>

                </div>

                <div className="prime-nav col-xs-6 col-sm-7 col-md-8">

                  <div className="navbar-header">

                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#primeNavMobile">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>

                  </div>

                  <div className="navbar-collapse collapse" id="primeNav">
                    <ul className="nav navbar-nav navbar-right">
                      <li><a href="#">About</a></li>
                      <li><a href="#Work">Work</a></li>
                      <li><a href="#Footer">Contact</a></li>
                    </ul>
                  </div>

              </div>

              <div className="navbar-collapse collapse" id="primeNavMobile">
                <div className="col-xs-12 visible-xs">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">About</a></li>
                    <li><a href="#Work">Work</a></li>
                    <li><a href="#Footer">Contact</a></li>
                  </ul>
                </div>
            </div>

            </div>
          </div>

        </nav>

      </div>
    )
  }
}

export default Header;
