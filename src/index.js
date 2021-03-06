import $ from 'jquery';
import 'bootstrap';
import 'slick-carousel';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header/Header';
import ContentController from './Components/ContentController/ContentController';
import Footer from './Components/Footer/Footer';

ReactDOM.render(<Header />, document.getElementById('Header'));
ReactDOM.render(<ContentController />, document.getElementById('Content'));
ReactDOM.render(<Footer />, document.getElementById('Footer'));
