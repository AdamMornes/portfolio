import React, { Component } from 'react';
import Zenscroll from'zenscroll';
import Button from '../Button/Button';

if ( $(window).width() < 768 ) {
  Zenscroll.setup(500, 42);
} else if ( $(window).width() >= 768 && $(window).width() < 992 ) {
    Zenscroll.setup(500, 50);
} else {
  Zenscroll.setup(500, 60);
}

class Header extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleNavResize);
    window.addEventListener('resize', this.handleScrollTo);
  }

  handleNavResize() {
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
      $('#mainNav').addClass('navbar-fixed-top');
    } else {
      $('#mainNav').removeClass('navbar-fixed-top');
    }
  }

  handleScrollTo() {
    if ( $(window).width() < 768 ) {
      Zenscroll.setup(500, 42);
    } else if ( $(window).width() >= 768 && $(window).width() < 992 ) {
        Zenscroll.setup(500, 50);
    } else {
      Zenscroll.setup(500, 60);
    }
  }

  render() {
    return (
      <div className="header-wrapper">

        <nav className="navbar" role="navigation" id="mainNav">

          <div className="container-fluid">
            <div className="row">

                <div className="logo col-xs-7 col-sm-5 col-md-4">

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

                  <div className="logo-area">
                    <div className="logo-wrapper">
                      <img className="img-responsive logo-lg hidden-xs" src={require('../../Images/logo-lg.png')}/>

                      <img className="img-responsive logo-sm visible-xs" src={require('../../Images/logo-sm.png')}/>

                      <div className="nav-top-icon">
                        <a href="#">
                          <span className="fa fa-angle-double-up"></span>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="prime-nav col-xs-3 col-xs-offset-2 col-sm-7 col-sm-offset-0 col-md-8">

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
                      <li><a href="#About">About</a></li>
                      <li><a href="#Work">Projects</a></li>
                      <li><a href="#Footer">Contact</a></li>
                    </ul>
                  </div>

              </div>

              <div className="clear"></div>
              <div className="navbar-collapse collapse" id="primeNavMobile">
                <div className="col-xs-12 visible-xs">
                  <ul className="nav navbar-nav navbar-right" data-toggle="collapse" data-target="#primeNavMobile">
                    <li><a href="#About">About</a></li>
                    <li><a href="#Work">Projects</a></li>
                    <li><a href="#Footer">Contact</a></li>
                  </ul>
                </div>
            </div>

            </div>
          </div>

        </nav>

        <div className="hero-content">
          <div className="hero-content-wrapper">
            <h1 className="hero-header">Hi,<br/> I'm Adam Mornes.</h1>
            <h2 className="hero-subheader">I do web.</h2>
            <a className="hero-nav" href="#About">
              <span className="fa fa-angle-down"></span> Learn more about me <span className="fa fa-angle-down"></span>
            </a>
          </div>
        </div>

        <div className="clear"></div>

      </div>
    )
  }
}

export default Header;
