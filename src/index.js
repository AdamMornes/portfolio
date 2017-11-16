import $ from 'jquery';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

ReactDOM.render(<Header />, document.getElementById('Header'));
ReactDOM.render(<Footer />, document.getElementById('Footer'));
